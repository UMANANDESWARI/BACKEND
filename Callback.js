function s1(id,roll){
    console.log("In this it will get user details",id);
    s2({roll: "23P31A0548"});

};
function s2(roll,subid)
{
    console.log("In this we will get roll number",roll);
    s3({subid:"100"});
};
function s3(subid)
{
    console.log("Here we will get of marks by subid",subid);
};
s1("123",function (roll){
    s2(roll,function (subid){
        s3(subid);
    })
})