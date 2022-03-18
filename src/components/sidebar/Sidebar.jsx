const Sidebar = () => {
    return (
        <aside className="px-4 py-1 my-2">
            <div className="aside-heading">
                <h5>Filters</h5>
                <button className="button-link">Clear</button>
            </div>
            <hr />
            <h6 className="my-1">Category</h6>
            <ul className="side-nav font-medium pl-1">
                <li>
                    <input id="category-1" type="checkbox" />
                    <label htmlFor="category-1">T-shirt</label>
                </li>
                <li>
                    <input id="category-2" type="checkbox" />
                    <label htmlFor="category-2">Hoodie</label>
                </li>
                <li>
                    <input id="category-3" type="checkbox" />
                    <label htmlFor="category-3">Cap</label>
                </li>
                <li>
                    <input id="category-4" type="checkbox" />
                    <label htmlFor="category-4">Longsleeve</label>
                </li>
            </ul>
            <hr />
            <h6 className="my-1">Rating</h6>
            <ul className="side-nav font-medium pl-1">
                <li>
                    <input id="rating-4" name="rating" type="radio" />
                    <label htmlFor="rating-4">4 stars and above</label>
                </li>
                <li>
                    <input id="rating-3" name="rating" type="radio" />
                    <label htmlFor="rating-3">3 stars and above</label>
                </li>
                <li>
                    <input id="rating-2" name="rating" type="radio" />
                    <label htmlFor="rating-2">2 stars and above</label>
                </li>
                <li>
                    <input id="rating-1" name="rating" type="radio" />
                    <label htmlFor="rating-1">1 star and above</label>
                </li>
            </ul>
            <hr />
            <h6 className="my-1">Price</h6>
            <ul className="side-nav font-medium pl-1">
                <li>
                    <input id="price-1" name="price" type="radio" />
                    <label htmlFor="price-1">High to low</label>
                </li>
                <li>
                    <input id="price-2" name="price" type="radio" />
                    <label htmlFor="price-2">Low to High</label>
                </li>
            </ul>
        </aside>
    );
};

export { Sidebar };
