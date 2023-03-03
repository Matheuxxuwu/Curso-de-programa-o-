var clube = "16";

switch(true){
    case clube >= 5 & clube < 11:
        console.log("categoria infantil");
        break
    case clube >= 11 & clube < 16 :
        console.log("categoria juventil")
        break
    case clube >= 16 & clube < 20:
        console.log("categoria junior");
        break
    case clube >= 21 & clube < 25:
        console.log("categoria profissional");
        break
    default:
        console.log("categoria inexistente");
}