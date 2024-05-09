import React from 'react'
import { Link } from 'react-router-dom';
import image2 from './images/5.jpg';
import image3 from './images/room.jpg';
import image6 from './images/3.jpg';


const Avail = () => {
    return (
        <>
            <div class="container-fluid text-center" id='roombox'>
                <div class="row m-4" id='row'>
                    <div class="d-flex">
                        <div class="card mb-3 boxes" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={image2}  class="img-fluid rounded-start m-4" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body m-2">

                                        <h5 class="card-title">Duplex Suite (Single/Double)</h5>

                                        <p className='card-text'> <i class='bx bxs-user'></i>Sleeps 2 1 King bed 1 Bathroom</p>
                                        <p class="card-text"><small class="text-body-secondary">  90m²• Bath• Cable/Satellite TV• Wireless Internet•
                                            Air conditioned• Complimentary fruit basket• Bathrobes Provided• Lift/Elevator Access• Linen and Towels Provided•
                                            Telephone• Alarm Clock• Room Safe• Room Service• Desk• Hairdryer• Mini Bar• Linen Provided• Alarm Clock</small></p>

                                        <p className='detail'>Located on the 6th floors and this two-story suite consist of living room down stairs and bed room upstairs. The bathroom has your private jacuzzi and separate shower unit.</p>
                                        <Link className='text-light link-underline-opacity-0link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 text-secondary' to="/booking">
                                            <button className='bt'>BOOK NOW</button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="card mb-3 boxes" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={image6} class="img-fluid rounded-start m-4" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body m-2">

                                        <h5 class="card-title">Grande Luxury Suite 1 Bedroom</h5>

                                        <p className='card-text'> <i class='bx bxs-user'></i>area image
                                            121 Sq Mt
                                            wifi icon
                                            Inclusive WiFi
                                            maximum Occoupancy image
                                            Up to 3 guests
                                            bed type image
                                            King</p>
                                        <p class="card-text"><small class="text-body-secondary"> Air condition, Flat screen
                                            LED TV with satellite program, Coffee and tea making facilities, IDD call, Hairdryer/ slipper / bathrobe,
                                            Room safety deposit box, Mini bar, Weight scale, Business writing desk with wireless phone, Shaving mirror/ shaver/
                                            toothbrush & paste, Toothpbrush & paste Personal stationery box, (2nd, 5th-6th) Hanger stand & shoehorn (5th-6th)</small></p>

                                        <p className='detail'>Deluxe rooms are located on the 2nd - 6th floors. Each room is 30sqm. Selected from a twin or queen bed room,
                                            all rooms are fully equipped with all the amenities expected of a five star hotel.</p>
                                        <Link className='text-light link-underline-opacity-0link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 text-secondary' to="/booking">
                                            <button className='bt'>BOOK NOW</button></Link>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="card mb-3 boxes" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={image3} class="img-fluid rounded-start m-4" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body m-2">

                                        <h5 class="card-title">One King Bed Suite</h5>

                                        <p className='card-text'> <i class='bx bxs-user'></i> Sleeps 4  <i class='bx bxs-hotel'></i>Room 1: 1 King bedRoom 1 Sofa bed <i class='bx bxs-bath'></i> 1 Bathroom</p>
                                        <p class="card-text"><small class="text-body-secondary"> 30.9m²• Non-smoking• Linen and Towels Provided• Wireless Internet• Kitchenette• Hairdryer• Air conditioned</small></p>

                                        <p className='detail'>Our King Bed Suite offers the best of functional yet separate spaces, as it boasts a spacious bedroom with one king-size bed and a separate living
                                            area that is equipped with a sofa bed. This suite can accommodate up to four guests and includes deluxe amenities for the entire family to enjoy.
                                            Includes Two (2) Complimentary breakfast coupons and Two (2) complimentary bottles of water per stay. Breakfast features a Hot American Buffet
                                            with Live Omelet Station and Live Waffle Station</p>
                                        <Link className='text-light link-underline-opacity-0link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 text-secondary' to="/booking">
                                            <button className='bt'>BOOK NOW</button></Link>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Avail;