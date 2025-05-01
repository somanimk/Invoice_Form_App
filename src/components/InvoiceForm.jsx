// src/components/InvoiceForm.jsx
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InvoiceViewer from './InvoiceViewer';
import LogoutButton from './LogoutButton';
import './css/InvoiceForm.css';

const InvoiceForm = ({ setUser }) => {
  const savedData = JSON.parse(localStorage.getItem('invoiceData')) || {};
  const [activeTab, setActiveTab] = useState('vendor');

  return (
    <div className="invoice-wrapper">
      <div className="sidebar">
        <InvoiceViewer />
      </div>

      <div className="form-area">
        <div className="top-bar">
          <h2>Create New Invoice</h2>
          <LogoutButton setUser={setUser} />
        </div>

        <div className="tabs">
          <span className={`tab ${activeTab === 'vendor' ? 'active' : ''}`} onClick={() => setActiveTab('vendor')}>Vendor Details</span>
          <span className={`tab ${activeTab === 'invoice' ? 'active' : ''}`} onClick={() => setActiveTab('invoice')}>Invoice Details</span>
          <span className={`tab ${activeTab === 'comments' ? 'active' : ''}`} onClick={() => setActiveTab('comments')}>Comments</span>
        </div>

        <Formik
          initialValues={{
            invoiceNumber: savedData.invoiceNumber || '',
            invoiceDate: savedData.invoiceDate || '',
            totalAmount: savedData.totalAmount || '',
            description: savedData.description || '',
            purchaseOrder: '',
            vendor: '',
            paymentTerms: '',
            invoiceDueDate: '',
            glPostDate: '',
            lineAmount: '',
            department: '',
            account: '',
            location: '',
            expenseDescription: '',
            comment: '',
          }}
          validationSchema={Yup.object({
            invoiceNumber: Yup.string().required('Required'),
            invoiceDate: Yup.date().required('Required'),
            totalAmount: Yup.number().required('Required'),
            description: Yup.string().required('Required'),
            purchaseOrder: Yup.string().required('Required'),
            vendor: Yup.string().required('Required'),
            paymentTerms: Yup.string().required('Required'),
            invoiceDueDate: Yup.date().required('Required'),
            glPostDate: Yup.date().required('Required'),
            lineAmount: Yup.number().required('Required'),
            department: Yup.string().required('Required'),
            account: Yup.string().required('Required'),
            location: Yup.string().required('Required'),
            expenseDescription: Yup.string().required('Required'),
          })}
          onSubmit={(values) => {
            localStorage.setItem('invoiceData', JSON.stringify(values));
            alert('Invoice saved!');
          }}
        >
          <Form className="invoice-form">

            {activeTab === 'vendor' && (
              <>
                <div className="section">
                  <h3>Vendor Information</h3>
                  <Field name="vendor" as="select" className="input">
                    <option value="">Select Vendor</option>
                    <option value="A - 1 Exterminators">A - 1 Exterminators</option>
                  </Field>
                  <ErrorMessage name="vendor" component="div" className="error" />
                  <small>550 Main St., Lynn - <a href="#">View Vendor Details</a></small>
                </div>

                <div className="section">
                  <h3>General Information</h3>
                  <label>Purchase Order Number</label>
                  <Field name="purchaseOrder" placeholder="Select PO Number" className="input" />
                  <ErrorMessage name="purchaseOrder" component="div" className="error" />
                </div>
              </>
            )}

            {activeTab === 'invoice' && (
              <>
                <div className="section grid-2">
                  <h3 className="full-width">Invoice Details</h3>

                  <div>
                    <label>Invoice Number</label>
                    <Field name="invoiceNumber" placeholder="Enter Invoice Number" className="input" />
                    <ErrorMessage name="invoiceNumber" component="div" className="error" />
                  </div>

                  <div>
                    <label>Invoice Date</label>
                    <Field type="date" name="invoiceDate" className="input" />
                    <ErrorMessage name="invoiceDate" component="div" className="error" />
                  </div>

                  <div>
                    <label>Total Amount</label>
                    <Field name="totalAmount" placeholder="$0.00" className="input" />
                    <ErrorMessage name="totalAmount" component="div" className="error" />
                  </div>

                  <div>
                    <label>Payment Terms</label>
                    <Field name="paymentTerms" placeholder="Select" className="input" />
                    <ErrorMessage name="paymentTerms" component="div" className="error" />
                  </div>

                  <div>
                    <label>Invoice Due Date</label>
                    <Field type="date" name="invoiceDueDate" className="input" />
                    <ErrorMessage name="invoiceDueDate" component="div" className="error" />
                  </div>

                  <div>
                    <label>GL Post Date</label>
                    <Field type="date" name="glPostDate" className="input" />
                    <ErrorMessage name="glPostDate" component="div" className="error" />
                  </div>

                  <div className="full-width">
                    <label>Invoice Description</label>
                    <Field name="description" placeholder="Invoice Description" className="input" />
                    <ErrorMessage name="description" component="div" className="error" />
                  </div>
                </div>

                <div className="section grid-2">
                  <h3 className="full-width">Expense Details</h3>

                  <div>
                    <label>Line Amount</label>
                    <Field name="lineAmount" placeholder="$0.00" className="input" />
                    <ErrorMessage name="lineAmount" component="div" className="error" />
                  </div>

                  <div>
                    <label>Department</label>
                    <Field name="department" placeholder="Select Department" className="input" />
                    <ErrorMessage name="department" component="div" className="error" />
                  </div>

                  <div>
                    <label>Account</label>
                    <Field name="account" placeholder="Select Account" className="input" />
                    <ErrorMessage name="account" component="div" className="error" />
                  </div>

                  <div>
                    <label>Location</label>
                    <Field name="location" placeholder="Select Location" className="input" />
                    <ErrorMessage name="location" component="div" className="error" />
                  </div>

                  <div className="full-width">
                    <label>Description</label>
                    <Field name="expenseDescription" placeholder="Description" className="input" />
                    <ErrorMessage name="expenseDescription" component="div" className="error" />
                  </div>
                </div>
              </>
            )}

            {activeTab === 'comments' && (
              <div className="section">
                <h3>Comments</h3>
                <Field
                  name="comment"
                  as="textarea"
                  placeholder="Add a comment and use @Name to tag someone"
                  className="input comment-box"
                />
              </div>
            )}

            <div className="actions">
              <button type="submit" className="submit-btn">Submit & New</button>
              <button type="button" className="draft-btn">Save as Draft</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default InvoiceForm;
