
export async function run() {

  let readline = require('readline');

  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });

  rl.question(">>Press any key to continue *****************  ", (answer: string) => {
    const j = "{\"IFTMINE03.HEADER\":{\"anxs_interchange.header\":{\"anxe_sender.identification\":\"ESZ58368060\",\"anxe_recipient.identification\":\"ESZ61961480\"},\"anxs_message.header\":{\"anxe_message.reference.number\":\"2012549\",\"anxe_message.type\":\"IFTMIN\",\"anxe_message.version.number\":\"D99A\"},\"trsd_beginning.of.message\":{\"tred_document.message.name.coded\":\"702\",\"tred_document.message.number\":\"2012549\",\"tred_message.function.coded\":\"5\"},\"trcd_date.time.period\":{\"tred_date.time.period.qualifier\":\"137\",\"tred_date.time.period\":\"201207121020\"},\"trsd_free.text\":{\"tred_text.subject.qualifier\":\"ZSE\",\"trcd_text.literal\":{\"tred_free.text\":\"jorge.cambra@portic.net\"}}},\"IFTMINE03.GROUP3\":[{\"trcd_reference\":{\"tred_reference.qualifier\":\"AAS\",\"tred_reference.number\":\"B5836806912520\"}},{\"trcd_reference\":{\"tred_reference.qualifier\":\"BN\",\"tred_reference.number\":\"JAVI01\"}},{\"trcd_reference\":{\"tred_reference.qualifier\":\"ACA\",\"tred_reference.number\":\"A61961488121800\"}},{\"trcd_reference\":{\"tred_reference.qualifier\":\"AAJ\",\"tred_reference.number\":\"A61961488122026\"},\"trcd_date.time.period\":{\"tred_date.time.period.qualifier\":\"235\",\"tred_date.time.period\":\"209912312359\"}},{\"trcd_reference\":{\"tred_reference.qualifier\":\"FF\",\"tred_reference.number\":\"EXP25016\"}}],\"IFTMINE03.GROUP8\":{\"trsd_details.of.transport\":{\"tred_transport.stage.qualifier\":\"20\",\"tred_mode.of.transport.coded\":\"1\",\"trcd_carrier\":{\"tred_carrier.identification\":\"AP02906\",\"tred_carrier.name\":\"ACUMEN SHIPPING LTD.\"},\"trcd_transport.identification\":{\"tred_id.of.the.means.of.transport\":\"8314586\",\"tred_id.of.means.of.transport.identification\":\"AVATAR\",\"tred_nationality.of.means.of.transport.coded\":\"SG\"}},\"trcd_date.time.period\":[{\"tred_date.time.period.qualifier\":\"133\",\"tred_date.time.period\":\"201201120000\"},{\"tred_date.time.period.qualifier\":\"200\",\"tred_date.time.period\":\"20120622\"},{\"tred_date.time.period.qualifier\":\"200\",\"tred_date.time.period\":\"0000\"},{\"tred_date.time.period.qualifier\":\"200\",\"tred_date.time.period\":\"0000\"},{\"tred_date.time.period.qualifier\":\"393\",\"tred_date.time.period\":\"201206192359\"}],\"IFTMINE03.GROUP9\":[{\"trcd_location.identification\":{\"tred_place.location.qualifier\":\"14\",\"tred_place.location.identification\":\"08M24X\",\"tred_place.location\":\"SUR (ESPERA)\"}},{\"trcd_location.identification\":{\"tred_place.location.qualifier\":\"8\",\"tred_place.location.identification\":\"ESBCN\",\"tred_place.location\":\"BARCELONA\"}}]},\"IFTMINE03.GROUP11\":[{\"trsd_name.and.address\":{\"tred_party.qualifier\":\"CN\",\"tred_party.id.identification\":\"A61961488\",\"tred_name.and.address.line\":\"PORTIC,SERVEIS DE COMER� ELECTRONIC\",\"tred_street.and.number.p.o.box\":\"WORLD TRADE CENTER ED. EST\",\"tred_city.name\":\"BARCELONA\",\"tred_country.coded\":\"ES\"}},{\"trsd_name.and.address\":{\"tred_party.qualifier\":\"GA\",\"tred_party.id.identification\":\"A61961488\",\"tred_name.and.address.line\":\"PORTIC,SERVEIS DE COMER� ELECTRONIC\",\"tred_street.and.number.p.o.box\":\"WORLD TRADE CENTER ED. EST\",\"tred_city.name\":\"BARCELONA\",\"tred_country.coded\":\"ES\"}},{\"trsd_name.and.address\":{\"tred_party.qualifier\":\"TR\",\"tred_party.id.identification\":\"A58898487\",\"tred_name.and.address.line\":\"TERMINAL CATALUNYA S.A.\",\"tred_country.coded\":\"ES\"}},{\"trsd_name.and.address\":{\"tred_party.qualifier\":\"SF\",\"tred_name.and.address.line\":\"alberto\",\"tred_street.and.number.p.o.box\":\"urgell 14\",\"tred_city.name\":\"st boi\",\"tred_country.coded\":\"ES\"},\"IFTMINE03.GROUP12\":{\"trsd_contact.information\":{\"tred_contact.function.coded\":\"LO\",\"tred_department.or.employee\":\"alberto\"},\"trcd_communication.contact\":{\"tred_communication.number\":\"936401323\",\"tred_communication.channel.qualifier\":\"TE\"}}},{\"trsd_name.and.address\":{\"tred_party.qualifier\":\"CR\",\"tred_party.id.identification\":\"A08336349\",\"tred_name.and.address.line\":\"DAMEX S.A.\",\"tred_street.and.number.p.o.box\":\"CTRA.CIRCUNVALACION TRAMO VI\",\"tred_city.name\":\"BARCELONA\",\"tred_country.coded\":\"ES\"}}],\"IFTMINE03.GROUP18\":{\"trsd_goods.item.details\":{\"tred_goods.item.number\":\"3\",\"tred_number.of.packages\":\"1\",\"tred_type.of.packages.identification\":\"AE\"},\"trsd_free.text\":{\"tred_text.subject.qualifier\":\"AAA\",\"trcd_text.literal\":{\"tred_free.text\":\"lkhkjhkljh\"}},\"IFTMINE03.GROUP20\":{\"trsd_measurements\":{\"tred_measurement.dimension.coded\":\"AAG\",\"tred_measurement.value\":\"1\"}},\"IFTMINE03.GROUP29\":{\"trsd_split.goods.placement\":{\"tred_equipment.identification.number\":\"123\",\"tred_number.of.packages\":\"1\"}}},\"IFTMINE03.GROUP37\":{\"trsd_equipment.details\":{\"tred_equipment.qualifier\":\"CN\",\"tred_equipment.identification.number\":\"MSCU1234567\",\"tred_equipment.size.and.type.identification\":\"0104\"},\"trcd_reference\":{\"tred_reference.qualifier\":\"SQ\",\"tred_reference.number\":\"123\"}}}"
    const ot = JSON.parse(j)

    const senderId = ot["IFTMINE03.HEADER"]["anxs_interchange.header"]["anxe_sender.identification"]
    const receiverId = ot["IFTMINE03.HEADER"]["anxs_interchange.header"]["anxe_recipient.identification"]
    const numOt = getRefOt(ot)
    const numAcceptanceOrder = getRefAdm(ot)
    const numDeliveryOrder = getRefLliu(ot)

    console.log(`sender: ${senderId}, receiver: ${receiverId}`)
    console.log(`numOT: ${numOt},  numAcceptanceOrder: ${numAcceptanceOrder}, numDeliveryOrder: ${numDeliveryOrder}`)
    rl.close();
  });

}

// Document related functions
function getRefOt(x: any) {
  return getRefDoc(x, "AAS")
}

function getRefAdm(x: any) {
  return getRefDoc(x, "ACA")
}

function getRefLliu(x: any) {
  return getRefDoc(x, "AAJ")
}

function getRefDoc(x: any, qualifier: string) {
  return x["IFTMINE03.GROUP3"].filter((x: any) => isDocType(x, qualifier)).map(getDocRefNum)
}


function isDocType(x: any, qualifier: string) {
  return (x["trcd_reference"]["tred_reference.qualifier"] === qualifier);
}

function getDocRefNum(x: any) {
  return (x["trcd_reference"]["tred_reference.number"]);
}


run()
