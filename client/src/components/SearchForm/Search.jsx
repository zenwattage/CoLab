// cellButton(cell, row, enumObject, rowIndex) {
//     let theButton;
//     let groupExistsInDatabase = false
//     for (var group in this.state.jsonFromDatabase){
//       if (this.state. jsonFromDatabase[group].id === row.id){
//         groupExistsInDatabase = true
//         break;
//       }
//     }

//     if (groupExistsInDatabase === true){
//       theButton =  <button style={{ backgroundColor: "red"}}
//                   type="button"
//                   onClick={() => this.onClickGroupToUpdate(cell, row, rowIndex)}>
//                   Update in Asana
//               </button>
//     } else {
//       theButton =  <button style={{ backgroundColor: "blue" }}
//                   type="button"
//                   onClick={() => this.onClickGroupSelected(cell, row, rowIndex)}>
//                   Send to Asana
//               </button>
//     }
//     return theButton
//   }  