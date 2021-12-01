import './App.scss';
import './Styles2.scss';

function Card() {
    return (
        <div class="regular-card">
            <div class="property-card">
                <div class="row">
                    <div class="title">Work</div>
                    <div class="points">
                <div class="point"></div>
                <div class="point"></div>
                <div class="point"></div>
                </div>
                <div class="row-2">
                <div class="hours">
                <div class="description">Last Week - 36hrs</div>
            </div>
            </div>
            </div>
            </div>
            <div class="regular-card play">
            <div class="property-card">
                <div class="row">
                    <div class="title">Play</div>
                    <div class="points">
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>

                <div class="row-2">
                    <div class="hours">10hrs</div>
                    <div class="description">Last Week - 8hrs</div>
                </div>
            </div>
        </div>
        <div class="regular-card study">
            <div class="property-card">
                <div class="row">
                    <div class="title">Study</div>
                    <div class="points">
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>

                <div class="row-2">
                    <div class="hours">4hrs</div>
                    <div class="description">Last Week - 7hrs</div>
                </div>
            </div>
        </div>

        <div class="regular-card exercise">
            <div class="property-card">
                <div class="row">
                    <div class="title">Exercise</div>
                    <div class="points">
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>

                <div class="row-2">
                    <div class="hours">4hrs</div>
                    <div class="description">Last Week - 5hrs</div>
                </div>
            </div>
        </div>

        <div class="regular-card social">
            <div class="property-card">
                <div class="row">
                    <div class="title">Social</div>
                    <div class="points">
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>

                <div class="row-2">
                    <div class="hours">5hrs</div>
                    <div class="description">Last Week - 10hrs</div>
                </div>
            </div>
        </div>

        <div class="regular-card selfcare">
            <div class="property-card">
                <div class="row">
                    <div class="title">Self care</div>
                    <div class="points">
                        <div class="point"></div>
                        <div class="point"></div>
                        <div class="point"></div>
                    </div>
                </div>

                <div class="row-2">
                    <div class="hours">2hrs</div>
                    <div class="description">Last Week - 2hrs</div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Card;