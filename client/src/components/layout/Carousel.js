import Carousel from 'react-elastic-carousel';
import classes from './Carousel.module.css';

export default function ProductsCarousel() {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ]

    return (
        <>
            <div className={classes.carousel}>
                <Carousel breakPoints={breakPoints}>
                    <div className={classes.item}>One</div>
                    <div className={classes.item}>Two</div>
                    <div className={classes.item}>Three</div>
                    <div className={classes.item}>Four</div>
                    <div className={classes.item}>Five</div>
                    <div className={classes.item}>Six</div>
                    <div className={classes.item}>Seven</div>
                    <div className={classes.item}>Eight</div>
                </Carousel>
            </div>
        </>
    );
}

