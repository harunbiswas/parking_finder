import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import { HiLocationMarker } from 'react-icons/hi';
import { RiSearchLine } from 'react-icons/ri';

export default function SideBar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <div className="title">
                    <h1>Parkeren in heel Nederland en België</h1>
                </div>
                </div>
                <div className="sidebar-search">
                   <form action="">
                       <div className="sidebar-search-item">
                            <span className="sidebar-search-item-icon">
                                <HiLocationMarker />
                            </span>
                            <DatalistInput
                                className='sidebar-search-item-input'
                                placeholder="Find you parking spots..."
                                onSelect={(item) => console.log(item.value)}
                                items={[
                                { id: 'Chocolate', value: 'Chocolate' },
                                { id: 'Coconut', value: 'Coconut' },
                                { id: 'Mint', value: 'Mint' },
                                { id: 'Strawberry', value: 'Strawberry' },
                                { id: 'Vanilla', value: 'Vanilla' },
                                ]}
                            />
                       <button type="submit"><span><RiSearchLine /></span></button>
                       </div>
                   </form>
                </div>
            
            <div className="sidebar-body">
                <div className="title">
                    <h2>Parking list:</h2>
                </div>
                <ul className="sidebar-body-parking">
                    <li className="sidebar-body-parking-item">
                        <button>item 1</button>
                    </li>
                    <li className="sidebar-body-parking-item">
                        <button>item 1</button>
                    </li>
                    <li className="sidebar-body-parking-item">
                        <button>item 1</button>
                    </li>
                    <li className="sidebar-body-parking-item">
                        <button>item 1</button>
                    </li>
                </ul>
            </div>
            <div className="sidebar-footer">
                <p>&copy; brand.com | {new Date().getFullYear()}</p>
            </div>
        </aside>
    )
}