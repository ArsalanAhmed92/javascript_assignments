var user = prompt("Enter Food you want to order").toLowerCase();
desiFood =  ["biryani" , "achargosht", "karahi", "daal", 'korma',"qorma","sabzi","daal_makhni"];
fastFood =   ["shawarma","zinger_burger", "roll", "club_sandwich", "broast","roast"];
bbqFood =  ["tikka", "boti_roll", "chicken_roll","malaiboti","mayo_garlic_roll" ];
otherFood =  ["naan", "roti", "raita", "salad","andy_wala_burger","sada_burger"];
  
for(var i=0 ;i< desiFood.length;i++ ){

if (user === desiFood[i]){
    document.write ("<h2><b><i>"+ desiFood[i]+"</h2></b></i>" +" IS AVAILABLE "+ "<br>"+"<h3>"+"WE ALSO HAVE"  +"</h3>"+"<br>"+"<h2><b><i>"+ fastFood+"</h2></b></i>" + "<br>"+"</h2></b></i>"+ bbqFood +"</h2></b></i>"+ "<br>"+"</h2></b></i>"+ otherFood+"</h2></b></i>");
}else if(user === ""){
    document.write("please enter some food");
}

    
};

for(var j=0 ;j< fastFood.length;j++ ){

    if (user === fastFood[j]){
        document.write ("<h2><b><i>"+ fastFood[j]+"</h2></b></i>" +" IS AVAILABLE "+ "<br>"+"<h3>"+"WE ALSO HAVE"  +"</h3>"+"<br>"+"<h2><b><i>"+ desiFood +"</h2></b></i>"+ "<br>"+"<h2><b><i>"+ bbqFood +"</h2></b></i>"+ "<br>"+"<h2><b><i>"+ otherFood+"</h2></b></i>");
    }else if(user === ""){
        document.write("please enter some food");
    }
    
        
    };

    for(var a=0 ;a< bbqFood.length;a++ ){

        if (user === bbqFood[a]){
            document.write ("<h2><b><i>"+ bbqFood[a] +"</h2></b></i>"+" IS AVAILABLE "+ "<br>"+"<h3>"+"WE ALSO HAVE"  +"</h3>"+"<br>"+"<h2><b><i>"+ fastFood +"</h2></b></i>"+ "<br>"+"<h2><b><i>"+ desiFood +"</h2></b></i>"+ "<br>"+"<h2><b><i>"+ otherFood+"</h2></b></i>");
        }else if(user === ""){
            document.write("please enter some food");
        }
        
            
        };


        