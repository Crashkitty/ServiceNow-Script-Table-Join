// define the two tables to be joined
// create a new GlideRecord object for the incident table
// set up a query for the incident table
// join the customer table to the incident table
// specify the fields to be returned from the joined tables
// execute the query and loop through the results
// get the values from the incident and customer tables
// output the values, such as print them to the console

let table1 = 'incident';
let table2 = 'u_customer';

let gr1 = new GlideRecord(table1);

gr1.addQuery('active', true);
gr1.addQuery('priority', 1);

gr1.addJoinQuery(table2);
gr1.addCondition(table2, 'u_customer_id', gr1.sys_id);

gr1.addEncodedQuery('sysparm_fields=number,short_description,u_customer.u_name');

gr1.query();
while (gr1.next()) {
  let incidentNumber = gr1.getValue('number');
  let shortDescription = gr1.getValue('short_description');
  let customerName = gr1.getValue('u_customer.u_name');

  gs.info('Incident ' + incidentNumber + ': ' + shortDescription + ' (Customer: ' + customerName + ')');
}
