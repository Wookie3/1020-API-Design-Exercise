export const courses = [
{
    Course_Id: 201,
    Course_Code: "CSFS_1020",
    Course_Name: "server side programming",
    Semester: "Winter 2022"
},
{
    Course_Id: 202,
    Course_Code: "CSFS_1030",
    Course_Name: "ocean side programming",
    Semester: "Winter 2022"
},
{
    Course_Id: 203,
    Course_Code: "CSFS_1040",
    Course_Name: "server side programming",
    Semester: "Winter 2022"
}
]

export const students = [
    {
        Student_ID: 1001,
        First_Name: "john",
        Last_Name: "doe",
        Password: "password1"
    },
    {
        Student_ID: 1002,
        First_Name: "steve",
        Last_Name: "smith",
        Password: "password2"
    },
    {
        Student_ID: 1003,
        First_Name: "jason",
        Last_Name: "smith",
        Password: "password3"
    }
]

export const enrollments = [
    {
        Student_ID: 1001,
        Courses: [201, 202, 203]
    },
    {
        Student_ID: 1002,
        Courses: [202, 203]
    },
    {
        Student_ID: 1003,
        Courses: [201, 202, 203]
    },
]