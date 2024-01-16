export const getCoffees = async (url = '/api/') => {
    let coffeesData = null
    const controller = new AbortController();

    try {
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const response = await fetch(url, { signal: controller.signal });

        clearTimeout(timeoutId);

        if (response && !response.ok) {
            const error = response.status;
            const details = await response.text();
            console.error(`HTTP error! Status: ${error}. Details: ${details}`);
            throw new Error(`HTTP error! Status: ${error}. Details: ${details}`);
        }

        coffeesData = (await response.json()).coffees;
    } catch (error) {
        if (error.name === 'AbortError') {
            try {
                const backupResponse = await fetch('/backup/db.json');
                coffeesData = (await backupResponse.json());
                console.log(coffeesData);
            } catch (backupError) {
                console.error('Backup fetch error ❌', backupError);
                throw backupError;
            }
        } else {
            console.error('Fetch error ❌', error);
            throw error;
        }
    }

    return coffeesData;
};
