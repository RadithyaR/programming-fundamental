const tryPromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        const isSuccess = false;// error

        if(isSuccess){
            resolve("Success");
        }else{
            reject("Error");
        }
    }, 3000)
});

const withoutAsyncAwait = () => {
    console.log("Pekerjaan 1");

    tryPromise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => console.log("Proses selesai"));

    console.log("Pekerjaan2")
};

// withoutAsyncAwait();

const asyncAwait = async () => {
    console.log("Pekerjaan 1A");

    await tryPromise //menunggu proses ini selesai
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => console.log("Proses selesai"));

    console.log("Pekerjaan 2A");
}

// asyncAwait();

const asyncAwait2 = async () => {
    try {
        const res = await tryPromise;

        console.log("masuk kesini, ", res);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Proses Selesai");
    }
};

// asyncAwait2();

const asyncAwaitThrow = async () => {
    try {
        // throw "sengaja error";

        throw new Error("Sengaja Erorr 2"); // yang paling bagus dibakai untuk trhow eerror
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Proses Selesai");
    }
};

asyncAwaitThrow();

// Real Case Promise
/**const fetchData = async () => { //menandakan function asynchronus, async => promise
    fetch('https://jsonplaceholder.typicode.com/users')  //funciton untuk mendapatkan data dari internet 
        .then((res) => {
            console.log(res.json())
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log("Proses Selesai");
        })
};

fetchData(); */

