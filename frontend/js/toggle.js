var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"../images/john(1).png"
    },
    {
        "name":"Anna Smith",
        "gender":"Female",
        "image":"../images/anna.png"
    },
]

var cuuId=0;

function toggle(){
    // toggle currId from 0->1 & 1 ->0
    cuuId = (cuuId + 1) % 2;

    //toggle the renderd user details

    var user=users[cuuId];
    //image
    document.getElementById("user-img").src=user.image;
    //name
    document.getElementById("user-Name").innerText=user.name;
    //gender
    document.getElementById("user-gender").innerText=user.gender;

}