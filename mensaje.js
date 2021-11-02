function insertar_msj(){

    let mensaje={
                id:$("#id_msj").val(),
                messagetext:$("#messagetext_msj").val(),     
    };
  
    let dataToSend=JSON.stringify(mensaje);
    $.ajax({
        
        url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:mensaje,
        success:function(response) {
          $("#id_msj").val("");
          $("#messagetext_msj").val("");
          consultar_msj();
          alert("Se ha creado el mensaje exitosamente")
        }
  
    });
  
  }
  
  function consultar_msj(){
  
    $.ajax({
        dataType: 'json',
        url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
        type:'GET',
        
        success:function(response) {
  
          console.log(response);
          $("#resultado_msj").empty();
  
          var items_msj=response.items;
   
          for(i=0;i<items_msj.length;i++){
  
            $("#resultado_msj").append("<tr>");
            $("#resultado_msj").append("<td>"+items_msj[i].id+"</td>");
            $("#resultado_msj").append("<td>"+items_msj[i].messagetext+"</td>");
            $("#resultado_msj").append('<td><button onclick="consultar_msj_id('+items_msj[i].id+')">Edit</button></td>');
            $("#resultado_msj").append('<td><button onclick="eliminar_msj('+items_msj[i].id+')">Delete</button></td>');
            $("#resultado_msj").append("</tr>");
  
          }
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }
  
  
  function eliminar_msj(idmsj){
  
    var elemento={
                  id:idmsj
    };
  
    var dataToSend=JSON.stringify(elemento);
  
    $.ajax({
          dataType:'json',
          data:dataToSend,
          url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
          type:'DELETE',
          contentType:'application/json',
          success:function(response) {
            console.log(response);
            consultar_msj();
            alert("Se ha eliminado el mensaje exitosamente")
          },
          
          error: function(jqXHR, textStatus, errorThrown) {
                
          }
      });
  
  }
  
  
  function consultar_msj_id(idmsj){
  
    $.ajax({
        dataType: 'json',
        url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message/"+idmsj,
        type:'GET',
        success:function(response) {
          console.log(response);
          var item=response.items[0];
  
          $("#id_msj").val(item.id);
          $("#messagetext_msj").val(item.messagetext);
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });
  
  }
  
  function actualizar_msj(){
  
    let mensaje={

        id:$("#id_msj").val(),
        messagetext:$("#messagetext_msj").val(),     

    };
  
    var dataToSend=JSON.stringify(mensaje);
  
    $.ajax({
            data:dataToSend,
            contentType:'application/json',
            url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
            type:'PUT',
            
            success:function(response) {
            console.log(response);
            $("#id_msj").val();
            $("#messagetext_msj").val();
            consultar_msj();
            alert("Se ha actualizado los datos del mensaje exitosamente")
            },
            
            error: function(jqXHR, textStatus, errorThrown) {
                
            }
        });
  
  }