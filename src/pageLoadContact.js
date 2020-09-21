const contactContent = () => `
<div id="contact-form">
                <!--Section heading-->
                <h2 class="h1-responsive font-weight-bold text-center my-4">Book your table</h2>
                <!--Section description-->
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to
                    contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <!--Grid row-->
                            <div class="row">

                                <!--Grid column-->
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control">
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>
                                <!--Grid column-->

                                <!--Grid column-->
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control">
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>
                                <!--Grid column-->

                            </div>
                            <!--Grid row-->

                            <!--Grid row-->
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control">
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>
                            <!--Grid row-->

                            <!--Grid row-->
                            <div class="row">

                                <!--Grid column-->
                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2"
                                            class="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>

                                </div>
                            </div>
                            <!--Grid row-->

                        </form>

                        <div class="text-center text-md-left">
                            <input class="btn btn-primary btn-lg btn-warning" type="submit" value="Submit">
                        </div>
                        <div class="status"></div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Rua Nunes dos Santos 11, São Pedro do Estoril 2765-529 São Pedro do
                                    Estoril</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>(+351) 222 222 222</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@restaurant.com</p>
                            </li>
                        </ul>
                    </div>
                    <!--Grid column-->
                </div>
                </div>
                <div id="map-wrapper">
                <h3>Location</h3>
                <!--The div element for the map -->
                <iframe id="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12455.928737732955!2d-9.3723404!3d38.6952535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe0262e304b3fc98b!2sPaco%20Bigotes!5e0!3m2!1sen!2spt!4v1600379737156!5m2!1sen!2spt"></iframe>

            </div>
`;

export { contactContent };
