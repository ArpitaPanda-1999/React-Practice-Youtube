const Explorer = {
    id : "1",
    name : "root",
    isFolder : "true",
    items : [
        {
            id : "2",
            name : "public",
            isFolder : true,
            items : [
                {
                    id : "3",
                    name : "public nested 1",
                    isFolder : true,
                    items : []
                },                  
                {
                    id : "4",
                    name : "public nested 2",
                    isFolder : true,
                    items : []
                },
                {
                    id : "5",
                    name : "public nested 3",
                    isFolder : false,
                    items : []                      
                }
            ]
        },
        {
            id : "6",
            name : "src",
            isFolder : true,
            items : [
                {
                    id : "7",
                    name : "Hello.html",
                    isFolder : false,
                    items : []
                },
                {
                    id : "8",
                    name : "Loading.html",
                    isFolder : false,
                    items : [] 
                },
                {
                    id : "9",
                    name : "Style.css",
                    isFolder : false ,
                    items : []
                }
            ]
        },
        {
            id : "10",
            name : "Package.json",
            isFolder : false,
            items : []
        }
    ]
}

export default Explorer;