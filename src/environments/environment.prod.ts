let base_url = 'http://localhost:1337';

export const environment = {
  production: true,
  // addNewInvoiceItems: base_url + '/invoice/items',
  // deleteInvoiceItemById: base_url + '/invoice/delitems',
  addNewInvoice: base_url + '/invoice/add',
  addNewInvoiceByVendorId: base_url +'/invoice/newinvoice',
  getAllVender: base_url + '/invoice/readv',
  getAllInvoice: base_url + '/invoice/read',
  getVenderInvoiceById: base_url + '/invoice/read',
  getInvoiceItemsById: base_url + '/invoice/items',
  updateVenderById:  base_url + '/invoice/update',
  DeleteVenderById: base_url + '/invoice/delete',
  getCommonData: base_url + '/invoice/readcd',
  getAllInvoicedata:base_url +'/invoice/invoicedata',
};
