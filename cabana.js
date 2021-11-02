
function insertar_cab(){

  let cabana={
              id:$("#id_cab").val(),
              brand:$("#brand_cab").val(),
              rooms:$("#rooms_cab").val(),
              category_id:$("#category_cab").val(),
              name:$("#name_cab").val()
  };


  let dataToSend=JSON.stringify(cabana);
  //console.log(cabana);
  $.ajax({
      
      url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin",
      type:"POST",
      data:cabana,
      success:function(response) {
        $("#id_cab").val("");
        $("#brand_cab").val("");
        $("#rooms_cab").val("");
        $("#category_cab").val("");
        $("#name_cab").val("");
        consultar_cab();
        alert("Se ha creado la cabaña exitosamente")
      }

  });

}

function consultar_cab(){

  $.ajax({
      dataType: 'json',
      url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin",
      type:'GET',
      
      success:function(response) {

        console.log(response);
        $("#resultado_cab").empty();

        var items_cab=response.items;
 
        for(i=0;i<items_cab.length;i++){

          $("#resultado_cab").append("<tr>");
          $("#resultado_cab").append("<td>"+items_cab[i].id+"</td>");
          $("#resultado_cab").append("<td>"+items_cab[i].brand+"</td>");
          $("#resultado_cab").append("<td>"+items_cab[i].rooms+"</td>");
          $("#resultado_cab").append("<td>"+items_cab[i].category_id+"</td>");
          $("#resultado_cab").append("<td>"+items_cab[i].name+"</td>");
          $("#resultado_cab").append('<td><button onclick="consultar_cab_id('+items_cab[i].id+')">Edit</button></td>');
          $("#resultado_cab").append('<td><button onclick="eliminar_cab('+items_cab[i].id+')">Delete</button></td>');
          $("#resultado_cab").append("</tr>");

        }
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}


function eliminar_cab(idcab){

  var elemento={
                id:idcab
  };

  var dataToSend=JSON.stringify(elemento);

  $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
          console.log(response);
          consultar_cab();
          alert("Se ha eliminado la cabaña exitosamente")
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              
        }
    });

}


function consultar_cab_id(idcab){

  $.ajax({
      dataType: 'json',
      url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin/"+idcab,
      type:'GET',
      success:function(response) {
        console.log(response);
        var item=response.items[0];

        $("#id_cab").val(item.id);
        $("#brand_cab").val(item.brand);
        $("#rooms_cab").val(item.rooms);
        $("#category_cab").val(item.category_id);
        $("#name_cab").val(item.name);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

function actualizar_cab(){

  var cabana={
              id:$("#id_cab").val(),
              brand:$("#brand_cab").val(),
              rooms:$("#rooms_cab").val(),
              category_id:$("#category_cab").val(),
              name:$("#name_cab").val()
}


var dataToSend=JSON.stringify(cabana);

$.ajax({
      data:dataToSend,
      contentType:'application/json',
      url:"https://g9e66744d6435ab-dbciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin",
      type:'PUT',
      
      success:function(response) {
        console.log(response);
        $("#id_cab").val("");
        $("#brand_cab").val("");
        $("#rooms_cab").val("");
        $("#category_cab").val("");
        $("#name_cab").val("");
        consultar_cab();
        alert("Se ha actualizado la cabaña exitosamente")
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}


