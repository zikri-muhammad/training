// const messages = [
//   {
//     msg_ns: "msg 0blz6ajd8oti",
//     node_ns: "node1g404oqzsfx",
//     type: "text",
//     content: "",
//     image_ratio: "",
//   },
//   {
//     msg_ns: "msg 0blz6ajd8oti",
//     node_ns: "node1g404oqzsfx",
//     type: "text",
//     content: "",
//     image_ratio: "",
//   },
// ];


// const updateContent = (mess) => {
//     let ms = mess
//     for (const key in mess) {
//         if (key == mess[key]) {
//             ms.content = 'khsds'
//         }
//     }

//     return ms
// }

// console.log(updateContent(messages));

function laksa(req, res){
  let id = req

  if (!id) {
    console.log('mohon isi id');
  }

  prisma.create({
    'name' : id
  })

}

console.log(laksa('jfhasjkdas'))
