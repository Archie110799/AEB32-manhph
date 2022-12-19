// inteface IUser {
//     id : Number,
//     name : string,
//     age : Number,
//     address : string
// }

// data type : IUser
let user = {
    id : 1,
    name : 'name 1',
    age : 30,
    address : 'address 1'
}
// Array<IUser>
let listUser = [
    {
        id : 1,
        name : 'name 1',
        age : 30,
        address : 'address 1'
    },
    {
        id : 2,
        name : 'name 2',
        age : 30,
        address : 'address 2'
    },
    {
        id : 3,
        name : 'name 3',
        age : 30,
        address : 'address 3'
    },
    {
        id : 4,
        name : 'name 4',
        age : 34,
        address : 'address 4'
    }

]

let elmBodyTable = document.getElementById('tbody__user') // jsdom get elm html
let tempRowTable = ''

function formatRowUser(user) {
    let _stringTr = `<tr>
                        <th scope="row">${user.id}</th>
                        <td>${user.name}</td>
                        <td>${user.age}</td>
                        <td>${user.address}</td>
                    </tr>`
    return _stringTr
}

listUser.map((user)=>{
    tempRowTable+= formatRowUser(user)
})

elmBodyTable.innerHTML = tempRowTable
// tempRowTable
console.log(elmBodyTable);

// get elm body table
// dummy data row `<tr><td>1</td><td>2</td></tr>`
// elm.innerHTML -> render row table -> table co 1 row data

// for -> render 5 row 

// dummy listUser -> for listUser -> render data row listUser

