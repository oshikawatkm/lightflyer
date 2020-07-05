
function addInvoice(invoice) {
  let invoiceRes = new Object();
  invoiceRes.pub_key    = invoice.pub_key;
  invoiceRes.address    = invoice.address;
  invoiceRes.bytes_sent = invoice.bytes_sent;
  invoiceRes.sat_sent   = invoice.sat_sent;
  invoiceRes.sat_recv   = invoice.sat_recv;
  invoiceRes.inbound    = invoice.inbound;
  invoiceRes.ping_time  = invoice.ping_time;

  return invoiceRes;
}

function getInvoices(peers) {
  let invoicesRes = [];
  invoices.forEach(invoice => {
    let obj = new Object();
    obj.pub_key    = invoice.pub_key;
    obj.address    = invoice.address;
    obj.bytes_sent = invoice.bytes_sent;
    obj.sat_sent   = invoice.sat_sent;
    obj.sat_recv   = invoice.sat_recv;
    obj.inbound    = invoice.inbound;
    obj.ping_time  = invoice.ping_time;

    invoicesRes.push(obj)
  })

  return invoicesRes;
}

function getInvoice(invoice) {
  let invoiceRes = new Object();
  invoiceRes.pub_key    = invoice.pub_key;
  invoiceRes.address    = invoice.address;
  invoiceRes.bytes_sent = invoice.bytes_sent;
  invoiceRes.sat_sent   = invoice.sat_sent;
  invoiceRes.sat_recv   = invoice.sat_recv;
  invoiceRes.inbound    = invoice.inbound;
  invoiceRes.ping_time  = invoice.ping_time;

  return invoiceRes;
}

exports.addInvoice = addInvoice;
exports.getInvoice = getInvoice;
exports.getInvoices = getInvoices;
