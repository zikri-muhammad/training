// // import axios, * as others from 'axios';
// const axios = require('axios')
// const express = require('express')
// const app = express()
// const port = 7000

// app.get('/whasapp', (req, res) => {
//     const test = async (req) => {
//         console.log("=== req ===");
//         console.log(req);
//         let url = 'https://waba-sandbox.360dialog.io/v1/messages'
//         let headers = {
//             "D360-Api-Key" : "FEbeZG_sandbox",
//             "Content-Type" : "application/json"
//             }
//         // const options = {
            
//         //     };

//         let res = await axios.request({
//             method : "POST",
//             url: url,
//             headers : headers,
//             data : {
//                 recipient_type: "individual",
//                 to: "62895331454575",
//                 type: "text",
//                 text: {
//                     body: "Hello, dear Aril!"
//                 }
//             }
//         }).then((response) => {
//             return "MASUK"
//         })

//         return res;

//         // axios.post(url, {
//         //     recipient_type: "individual",
//         //     to: "62895331454575",
//         //     type: "text",
//         //     text: {
//         //         body: "Hello, dear Aril!"
//         //     }
//         // }, options)
//         // .then(response => {
//         //     console.log(response)
//         //     console.log('abimayu')
//         //     res.json(response.data)

//         // })
//     }

//     test(req)

// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// // const test = () => {
// //     let url = 'https://waba-sandbox.360dialog.io/v1/messages'
// //     const options = {
// //         headers: {
// //         "D360-Api-Key" : "FEbeZG_sandbox",
// //         "Content-Type" : "application/json"
// //         }
// //       };

// //     axios.post(url, {
// //         recipient_type: "individual",
// //         to: "62895331454575",
// //         type: "text",
// //         text: {
// //             body: "Hello, dear customer!"
// //         }
// //     }, options)
// //     .then(response => {
// //         console.log(response)
// //         console.log('abimayu')

// //     })
// // }




// const getEmailById = () => {
//     const emailBady = req.bady.email;
//     const email =  Users.findOne({ where: { email: emailBady} }); // carikan aku data email vblalla 

//     if (email != 0) {
//         // do insert
//     } else {
//         res.json('jsdhs', 'maaf email sudah digunakan silahkan gunakan email yang berbeda')
//     }

// }


// console.log(getEmailById());
    