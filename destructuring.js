const employees = {
    engineers: {
        em1: {
            id: 1,
        name: "Yukti Panwar",
        occupation: "Data Scientist"
        },
        em2: {
            id: 2,
            name: "Prakash Sakari",
            occupation: "Front End Engineer"
        },
        
    },
    placement: {
        em3: {
            id: 3,
            name: "Sakshi Awasthi",
            occupation:"Sr. Executive"
        }
    },
    youtube: {
        em4: {
            id: 4,
            name: "Jay Paswan",
            occupation:"Youtube Manager"
        },
    }
    
}

// let {engineers: {em2: {name, occupation}}} = employees;
// // console.log(em2);
// console.log(name);
// console.log(occupation);

let{youtube:{em4: {name, occupation}}}= employees;
console.log(name);
console.log(occupation);

