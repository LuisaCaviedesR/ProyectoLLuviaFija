 $(document).ready(function() {
       
         $('#alquiler').DataTable({
                responsive: true,
                "scrollX": false,
                "language": {
                "url": "https://cdn.datatables.net/plug-ins/1.10.13/i18n/Spanish.json"
                }
        });
          $('#cabana').DataTable({
                    responsive: true,
                    "scrollX": false,
                    "language": {
                    "url": "https://cdn.datatables.net/plug-ins/1.10.13/i18n/Spanish.json"
                    }
            });
         $('#afiliado').DataTable({
                    responsive: true,
                    "scrollX": false,
                    "language": {
                    "url": "https://cdn.datatables.net/plug-ins/1.10.13/i18n/Spanish.json"
                    }
            });
        $('#usuario1').DataTable({
                    responsive: true,
                    "scrollX": false,
                    "language": {
                    "url": "https://cdn.datatables.net/plug-ins/1.10.13/i18n/Spanish.json"
                    }
            });
     $('.input-daterange').datepicker();

    });
$(".search-select").select2({
  placeholder: "Buscar",
  allowClear: true,
  language : 'es'    
});
