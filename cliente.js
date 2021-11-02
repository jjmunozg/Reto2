
function insertar_cli(){

    let cliente={
                id:$("#id_cli").val(),
                name:$("#name_cli").val(),
                email:$("#email_cli").val(),
                age:$("#age_cli").val(),
    };
  
    let dataToSend=JSON.stringify(cliente);
    $.ajax({
        
        url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:cliente,
        success:function(response) {
          $("#id_cli").val("");
          $("#name_cli").val("");
          $("#email_cli").val("");
          $("#age_cli").val("");
          consultar_cli();
          alert("Se ha creado el cliente exitosamente")
        }
  
    });
  
  }
  
  function consultar_cli(){
  
    $.ajax({
        dataType: 'json',
        url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type:'GET',
        
        success:function(response) {
  
          console.log(response);
          $("#resultado_cli").empty();
  
          var items_cli=response.items;
   
          for(i=0;i<items_cli.length;i++){
  
            $("#resultado_cli").append("<tr>");
            $("#resultado_cli").append("<td>"+items_cli[i].id+"</td>");
            $("#resultado_cli").append("<td>"+items_cli[i].name+"</td>");
            $("#resultado_cli").append("<td>"+items_cli[i].email+"</td>");
            $("#resultado_cli").append("<td>"+items_cli[i].age+"</td>");
            $("#resultado_cli").append('<td><button onclick="consultar_cli_id('+items_cli[i].id+')">Edit</button></td>');
            $("#resultado_cli").append('<td><button onclick="eliminar_cli('+items_cli[i].id+')">Delete</button></td>');
            $("#resultado_cli").append("</tr>");
  
          }
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }
  
  
  function eliminar_cli(idcli){
  
    var elemento={
                  id:idcli
    };
  
    var dataToSend=JSON.stringify(elemento);
  
    $.ajax({
          dataType:'json',
          data:dataToSend,
          url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
          type:'DELETE',
          contentType:'application/json',
          success:function(response) {
            console.log(response);
            consultar_cli();
            alert("Se ha eliminado el cliente exitosamente")
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
  
  }
  
  
  function consultar_cli_id(idcli){
  
    $.ajax({
        dataType: 'json',
        url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client/"+idcli,
        type:'GET',
        success:function(response) {
          console.log(response);
          var item=response.items[0];
  
          $("#id_cli").val(item.id);
          $("#name_cli").val(item.name);
          $("#email_cli").val(item.email);
          $("#age_cli").val(item.age);
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }
  
  function actualizar_cli(){
  
    let cliente={

        id:$("#id_cli").val(),
        name:$("#name_cli").val(),
        email:$("#email_cli").val(),
        age:$("#age_cli").val(),

    };
  
    var dataToSend=JSON.stringify(cliente);
  
    $.ajax({
            data:dataToSend,
            contentType:'application/json',
            url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
            type:'PUT',
            
            success:function(response) {
            console.log(response);
            $("#id_cli").val("");
            $("#name_cli").val("");
            $("#email_cli").val("");
            $("#age_cli").val("");
            consultar_cli();
            alert("Se ha actualizado los datos del cliente exitosamente")
            },
            
            error: function(jqXHR, textStatus, errorThrown) {
                
            }
        });
  
  }
  
  
  