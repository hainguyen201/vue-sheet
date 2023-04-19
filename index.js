// arrayBuffer=""
        // const xlsxFrame= document.getElementById('xlsxFrame')
        // const param= {"base64":arrayBuffer }
        // $('#xlsxFrame').on('load', function () {
        //     xlsxFrame.contenWindow.postMessage(param, "*");
        //     xlsxFrame.style.display='block'
        // });

function previewFileExcel(url){
    $.ajax({
        type: "GET",
        url: url,
        // data: "data",
        // dataType: "dataType",
        success: function (arrayBuffer, textStatus, request) {
            const xlsxFrame= document.getElementById('xlsxFrame')
            const param= {"base64":arrayBuffer }
            $('#xlsxFrame').on('load', function () {
                xlsxFrame.contenWindow.postMessage(param, "*");
                xlsxFrame.style.display='block'
            });
        },
        error: function(error){

        }
    });
}