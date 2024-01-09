
export const getCoffees = async (url = '/api/') => {
    let coffeesData = null
    let controller = new AbortController()
    try {
        setTimeout(() => controller.abort(), 1000)
        const response = await fetch(url, {
            method: 'GET',
            signal: controller.signal
        });
        if (response && !response.ok) {
            const error = response.status;
            const details = await response.text();
            console.error(`HTTP error! Status: ${error}. Details: ${details}`);
            throw new Error(`HTTP error! Status: ${error}. Details: ${details}`);
        }
        coffeesData = (await response.json()).coffees
    } catch (error) {
        if (error.name == 'AbortError') {
            try {
                const backupResponse = await fetch('/backup/db.json');
                coffeesData = (await backupResponse.json());
                console.log(coffeesData)
            } catch (backupError) {
                console.error('Backup fetch error ❌', backupError);
                throw backupError;
            }
        }
        console.error('Fetch error ❌', error);
        throw error;
    }

    return coffeesData ;
};


