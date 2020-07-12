
function addInvoice(invoice) {
  let invoiceRes = new Object();
  invoiceRes.r_hash    = invoice.r_hash;
  invoiceRes.payment_request    = invoice.payment_request;

  return invoiceRes;
}


function getInvoices(invoices) {
  let invoicesRes = [];
  invoices.forEach(invoice => {
    let obj = new Object();
    obj.memo    = invoice.memo;
    obj.description_hash    = invoice.description_hash;
    obj.expiry = invoice.expiry;
    obj.fallback_addr   = invoice.fallback_addr;
    obj.route_hints   = invoice.route_hints;
    obj.private    = invoice.private;
    obj.add_index  = invoice.add_index;
    obj.settle_index = invoice.settle_index;
    obj.amt_paid = invoice.amt_paid;
    obj.amt_paid_sat = invoice.amt_paid_sat;
    obj.amt_paid_msat = invoice.amt_paid_msat;
    obj.state = invoice.state;
    obj.features = invoice.features;
    obj.is_keysend = invoice.is_keysend;
    obj.timestamp = invoice.timestamp;
    obj.r_preimage = invoice.r_preimage;
    obj.r_hash = invoice.r_hash;
    obj.value = invoice.value;
    obj.value_msat = invoice.value_msat;
    obj.creation_date = invoice.creation_date;
    obj.settle_date = invoice.settle_date;
    obj.payment_request = invoice.payment_request;
    obj.htlcs = invoice.htlcs;

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
