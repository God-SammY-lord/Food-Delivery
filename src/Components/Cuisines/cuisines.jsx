import React, { Component } from "react";
import "./cuisines_style.css";
import ButterChicken from "./Indian/Butter Chicken.jpg";
import PalakPaneer from "./Indian/Palak Paneer.jpg";
import DaalMakhani from "./Indian/Daal Makhani.jpg";
import Chowmein from "./Chinese/Chowmein.jpg";
import RoastedDuck from "./Chinese/Roasted Duck.jpg";
import KungPaoChicken from "./Chinese/Kung Pao Chicken.jpg";
import SesameChicken from "./American/Sesame Chicken.jpg";
import SubmarineSandwich from "./American/Sumarine Sandwich.jpg";
import EggsBenedict from "./American/Eggs Benedict.jpg";
import GrilledBbqChickenPizza from "./Fast Food & BBQ/Grilled BBQ Chicken Pizza.jpg";
import GrilledHamburger from "./Fast Food & BBQ/Grilled Hamburger.jpg";
import GrilledCheeseBurrito from "./Fast Food & BBQ/Grilled Cheese Burrito.jpg";
import MargheritaPizza from "./Italian/Margherita Pizza.jpg";
import Lasagna from "./Italian/Lasagna.jpg";
import MushroomRissoto from "./Italian/Mushroom Risotto.jpg";
class Cuisines extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Indian</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-3 g-4 debit">
            <div className="col">
              <div className="card h-100">
                <img src={ButterChicken} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Butter Chicken</h5>
                  <p className="card-text">
                    Butter Chicken is one of the most popular curries at any
                    Indian restaurant around the world. Aromatic golden chicken
                    pieces in an incredible creamy curry sauce, this Butter
                    Chicken recipe is one of the best you will try!!
                    <br />
                    <br />
                    Butter Chicken simmers in a buttery tomato sauce and is
                    punctuated by several special spices and herbs. Butter
                    chicken is prepared with marinated chicken that's first
                    grilled and then served in a rich gravy (a.k.a. curry) made
                    with tomato, butter, and a special spice blend as a base.
                    Unlike most Indian curries where the preparation of the base
                    starts with a blend of onion and a ginger garlic paste
                    cooked in oil, butter chicken uses tomato as a base and is
                    cooked in butter, giving it a slightly sweet flavor. Cashews
                    and almonds add to the sweetness and richness of the dish.
                  </p>
                </div>
                <div className="container order">
                  <a href="#" className="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={PalakPaneer} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Palak Paneer</h5>
                  <p className="card-text">
                    Palak Paneer is one of the most popular Indian dish made
                    with succulent paneer cubes (Indian cottage cheese) in a
                    smooth spinach sauce. This vibrant green spinach sauce
                    features fresh spinach leaves (palak in Hindi), onions,
                    tomatoes, herbs and spices. Packed with healthy nutrients
                    like calcium, iron and vitamin C, this is a meal that you
                    can feel good about eating.
                    <br />
                    <br />
                    This dish follows the conventional method of blanching the
                    spinach leaves first and then puree it. The spinach puree is
                    later cooked with spices, onions and tomatoes until a thick
                    curry like consistency is achieved. Lastly the Paneer is
                    simmered in that sauce and the final deed is to add some
                    fresh cream!! Order Now!!
                  </p>
                </div>
                <div className="container order">
                  <a href="#" className="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={DaalMakhani} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Daal Makhani</h5>
                  <p className="card-text">
                    This Dal Makhani recipe is a restaurant style version with
                    subtle smoky flavors and creaminess of the lentils. If you
                    love authentic Punjabi food then you are going to love this
                    Dal Makhani even more. This North Indian Cuisine is made
                    with Whole Black Lentils (known as Urad dal or Kaali Dal in
                    Hindi) and Kidney Beans (known as Rajma in Hindi).
                    <br />
                    <br />
                    This dish follows the Traditional way by simmering lentils
                    on wood/coal fire for several hours. This slow cooking for
                    prolonged hours yields a creamy, thick and best tasting
                    Buttery Daal. Order Now!!!
                  </p>
                </div>
                <div className="container order">
                  <a href="#" className="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="b-example-divider"></div>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Italian</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-3 g-4 debit">
            <div className="col">
              <div className="card h-100">
                <img src={MargheritaPizza} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <p className="card-text">
                    It is said that the famous Margherita pizza from Naples,
                    considered the “true” pizza by many, came about when Queen
                    Margherita, while traveling through Italy, fell in love with
                    the garnished flatbreads being sold to the poor. She
                    summoned a baker named Raphelle to bake her a selection of
                    pizzas to try. One version, consisting of tomatoes,
                    mozzarella and fresh basil to honor the colors of the
                    Italian flag, became her favorite, and was named to honor
                    her appreciation for pizza. Pizza Margherita is still a
                    favorite pizza choice in Italy today.
                    <br />
                    <br />
                    The pizza consists of a few, fresh ingredients on a tasty,
                    thin crust, packed with multiple ingredients, laden with a
                    layer of heavy cheese, and prepared with a much thicker
                    crust.
                  </p>
                </div>
                <div className="container order">
                  <a href="#" className="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={MushroomRissoto} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mushroom Rissoto</h5>
                  <p className="card-text">
                    his is a risotto so good, it will make a grown man weep. A
                    creamy, umami packed Mushroom Risotto fully loaded with
                    garlicky, buttery mushrooms stirred through the risotto AND
                    piled on top, it’s completely and utterly mouthwateringly
                    delicious, can’t-stop-eating-it-good.
                    <br />
                    <br />
                    It’s such a let down when you’re faced with a giant bowl of
                    Mushroom Risotto, only to find you have to fish around
                    desperately through piles of gluey rice to find a a few
                    piddly bits of mushrooms.Rest Assured, no fishing expedition
                    will be required for this Mushroom Risotto!
                  </p>
                </div>
                <div className="container order">
                  <a href="#" className="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={Lasagna} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Lasagna</h5>
                  <p className="card-text">
                    A classic recipe of one of the most loved foods in the
                    world. The ultimate comfort food = homemade lasagna. Family
                    and friends gather around the dinner table at any time for
                    this lasagna recipe. A big warm comforting hug within layers
                    of pasta, tomato sauce, white sauce and melted cheese!
                    <br />
                    <br />
                    Layered with a rich meat sauce and a creamy parmesan white
                    sauce, plus the perfect amount of mozzarella cheese! Order
                    Now!!
                  </p>
                </div>

                <div className="container order">
                  <a href="#" className="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="b-example-divider"></div>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Chinese</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div class="row row-cols-1 row-cols-md-3 g-4 debit">
            <div class="col">
              <div class="card h-100">
                <img src={Chowmein} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Chow Mein</h5>
                  <p class="card-text">
                    "Chow mein" (炒面 chǎomiàn) is the Cantonese pronunciation
                    of the Chinese characters above, which means stir-fried
                    noodles. Generally speaking, this stir-fried dish consists
                    of noodles, meat (usually chicken, beef, shrimp, or pork),
                    onions and celery.
                  </p>
                </div>
                <div className="container order">
                  <a href="#" class="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={RoastedDuck} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Peking Roasted Duck</h5>
                  <p class="card-text">
                    Peking duck (北京烤鸭 Běijīng kǎoyā) is a famous dish from
                    Beijing, enjoying world fame, and considered as one of
                    China’s national dishes.
                    <br />
                    <br />
                    Peking duck is savored for its thin and crispy skin. The
                    Sliced Peking duck is often eaten with pancakes, sweet bean
                    sauce, or soy with mashed garlic. It is a must-taste dish in
                    Beijing!
                  </p>
                </div>
                <div className="container order">
                  <a href="#" class="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={KungPaoChicken} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Kung Pao Chicken</h5>
                  <p class="card-text">
                    Kung Pao Chicken (宫保鸡丁 gōngbào jīdīng) is a famous
                    Sichuan-style specialty, popular with both Chinese and
                    foreigners. The major ingredients are diced chicken, dried
                    chili, and fried peanuts.
                    <br />
                    <br />
                    People in Western countries have created a Western-style
                    gong bao chicken, for which the diced chicken is covered
                    with cornstarch, and vegetables, sweet and sour sauce and
                    mashed garlic are added.
                  </p>
                </div>
                <div className="container order">
                  <a href="#" class="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="b-example-divider"></div>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">American</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div class="row row-cols-1 row-cols-md-3 g-4 debit">
            <div class="col">
              <div class="card h-100">
                <img src={SesameChicken} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Sesame Chicken</h5>
                  <p class="card-text">
                    Sesame chicken is an American-Chinese dish made by
                    deep-frying deboned and battered chicken pieces which are
                    then dressed with a thick, translucent, sweet sauce
                    consisting of chicken broth, sugar, corn starch, and vinegar
                    or sake. The dish is additionally topped with toasted or
                    untoasted sesame seeds, giving sesame chicken its name.
                    <br />
                    <br />
                    It is usually served with steamed broccoli, rice, or baby
                    corn on the side.
                  </p>
                </div>
                <div className="container order">
                  <a href="#" class="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={SubmarineSandwich} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Submarine Sandwich</h5>
                  <p class="card-text">
                    Submarine sandwich consists of a long, split bread roll,
                    filled with numerous ingredients such as meats, cheeses,
                    sauces, vegetables, and seasonings. Depending on the
                    regional variety, the sandwich is called differently
                    throughout the United States.
                    <br />
                    <br />
                    In the Midwest and California, it's grinder, in New York and
                    Northern New Jersey, it's hero, in Delaware, it's sub, and
                    in Baltimore, South Jersey, and Philadelphia, it's called a
                    hoagie. Around New Orleans, it's known as po'boy, and in
                    Maine, it's Italian sandwich, even if it has nothing to do
                    with Italy.
                  </p>
                </div>
                <div className="container order">
                  <a href="#" class="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={EggsBenedict} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Eggs Benedict</h5>
                  <p class="card-text">
                    Eggs Benedict is a breakfast or brunch meal consisting of
                    toasted halves of an English muffin that are topped with a
                    slice of ham or bacon, a poached egg, and sauce Hollandaise.
                    Although there are numerous theories about the origin of the
                    dish, most people agree that credit should be given to
                    Delmonico's Restaurant.
                    <br />
                    <br />
                    It is believed that Delmonico's chef named Charles Ranhofer
                    invented the dish in 1860s for a customer named Mrs. LeGrand
                    Benedict, who wanted to eat something new. Ranhofer even
                    published the recipe in his cookbook, The Epicurean,
                    published in 1894
                  </p>
                </div>
                <div className="container order">
                  <a href="#" class="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="b-example-divider"></div>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Fast Food & BBQ</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div class="row row-cols-1 row-cols-md-3 g-4 debit">
            <div class="col">
              <div class="card h-100">
                <img
                  src={GrilledBbqChickenPizza}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Grilled BBQ Chicken Pizza</h5>
                  <p class="card-text">
                    Sweet, smoky and savory BBQ chicken pizza made fast and
                    delicious directly on a grill! Topped with tender pieces of
                    chicken, bacon, onion, tomato, peppers, and corn.
                    <br />
                    <br />
                    The grill isn’t just a means for firing up hearty pieces of
                    meat, oh no my friend. If you haven’t thrown a pizza
                    directly on those sizzling hot grates, then you’ve been
                    missing out on crispy, cheesy bliss. This pizza in
                    particular is a go-to favorite around our house because it’s
                    not your typical mozzarella-and-red-sauce variety. This one
                    actually features a different kind of sauce — BBQ — and the
                    rest of the ingredients — chicken, onions, jalapenos,
                    garlic, cheese — are also a break from the norm.
                  </p>
                </div>
                <div className="container order">
                  <a href="#" class="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={GrilledHamburger} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Grilled Hamburger</h5>
                  <p class="card-text">
                    Juicy, smoky grilled hamburgers. Serve on buns with your
                    favorite toppings. Get ready for some real heat because this
                    dish is bursting with spices. along the wood-smoky flavour
                    of a traditional Charcoal BBQ.
                    <br />
                    <br />
                    Bored of eating the Traditional old Burgers over and over
                    again? We have just the right dish to cheer you up. After
                    all who doesn't like BBQ and when that zest of the BBQ is
                    infused into the Burgers, there can be nothing more
                    satisfying to the Taste Buds.
                  </p>
                </div>
                <div className="container order">
                  <a href="#" class="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img
                  src={GrilledCheeseBurrito}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Grilled Cheese Burrito</h5>
                  <p class="card-text">
                    This indulgent burrito draws inspiration from the classic
                    grilled cheese sandwich. It features fan favorite fillings
                    like seasoned beef, seasoned rice, a three-cheese blend,
                    crunchy red strips, chipotle sauce and reduced fat sour
                    cream, all wrapped with a warm flour tortilla hugged by a
                    warm layer of grilled cheese. Customers can also enjoy a
                    vegetarian version by simply asking to swap beans for meat*.
                    <br />
                    <br />
                    Bursting with Cheese and oozing with Flavour, this is one of
                    our hot selling items. Order Now!! Before it gets Sold Out.
                  </p>
                </div>
                <div className="container order">
                  <a href="#" class="btn btn-outline-info btn-sm">
                    Add to Cart
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cuisines;
