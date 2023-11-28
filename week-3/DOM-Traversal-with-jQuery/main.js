
const computerData = []

$(".generator").on("click", function(){
    const processorID = $(this).closest(".processor").attr("id")
    const computerDataId = $(this).closest(".computer").data().id
    const busNum = $(this).closest(".computer").find(".BUS").text()
    computerData.push({cmp_id: computerDataId})
    const details = {
        "Processor ID:": processorID,
        "Computer’s data-id:": computerData,
        "BUS:": busNum
    }
    console.log(details)
})



$(".validator").on("click", function(){
    const generatorText = $(this).closest(".computer").find(".processor").find(".generator").text()
    const mb = $(this).closest(".computer").find(".MB").text()
    const qr1 = $(this).closest(".computer").find(".processor").find(".QR").eq(0).text()
    const qr2 = $(this).closest(".computer").find(".processor").find(".QR").eq(1).text()

    const details = {
        "Generator’s Text:": generatorText,
        "MB:": mb,
        "QRs:": qr1 + " " + qr2
    }
    console.log(details)
})