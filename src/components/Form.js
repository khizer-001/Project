import React from 'react'

const Form = () => {
    return (
        <>
            <div className="container my-2 w-50 py-3" style={{ backgroundColor: 'grey', borderRadius: '10px' }}>
                <form className="row g-3 needs-validation" novalidate>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="validationCustom03" className="form-label">Email</label>
                        <input type="email" className="form-control" id="validationCustom03" required />
                    </div>
                    <div className="col-6">
                        <label htmlFor="validationCustom05" className="form-label">Job Title</label>
                        <input type="text" className="form-control" id="validationCustom05" placeholder="eg: software engineer" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom06" className="form-label">City</label>
                        <input type="text" className="form-control" id="validationCustom06" required />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" required />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div >
        </>
    )
}

export default Form
