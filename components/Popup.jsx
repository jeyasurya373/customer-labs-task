import { useState } from "react";
import "./popup.css"

export default function Popup() {
    const [modal, setModal] = useState(false);

    const popupModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (


        <>
            <button onClick={popupModal} className="botton-modal">
                Save Segment
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={popupModal} className="overlay"></div>
                    <div className="modal-content">
                        <label >Enter the Name of the Segment</label>
                        <input type="text" placeholder="Name of the Segment" className="input" />
                        <p>To save your segment, you need to add the schemas to build the query</p>
                        <label for="schema" className="schema-label">Add Schema to Segment</label>
                        <select id="schema" name="schema" className="schema-option">
                            <option value="First name">First name</option>
                            <option value="Last name">Last name</option>
                            <option value="Gender">Gender</option>
                            <option value="Age">Age</option>
                        </select>

                        <input type="text" placeholder="First Name" className="input" />
                        <input type="text" placeholder="Account Name" className="input" />
                        <button className="close-modal" onClick={popupModal}>
                            X
                        </button>
                        <button className="submit">Submit</button>

                    </div>

                </div>
            )}

        </>




    )
}
