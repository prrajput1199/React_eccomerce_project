import styled from "styled-components";
import { useProductContext } from "./styles/Context/ProductContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNavigation from "./Components/PageNavigation";
import MyImage from "./Components/MyImage";
import FormatPrice from "./Helper/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import StarRating from "./Components/StarRating";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();
  const SINGLE_API = "https://api.pujakaitem.com/api/products";
  const {
    id: new_id,
    name,
    company,
    colors,
    description,
    category,
    image,
    stars,
    reviews,
    price,
    stock,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${SINGLE_API}?id=${id}`);
  }, []);

  return (
    <Wrapper>
      <PageNavigation title={name} />
      {console.log("singleProduct =>", singleProduct)};
      <div className="container">
        <div className="grid grid-two-column">
          <div className="product-images">
            <MyImage images = {image}/>
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            <StarRating stars={stars} reviews={reviews}/>
            <div className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </div>
            <p className="product-data-price product-data-real-price">
              Deal of the Day : <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available :
                <span>{stock > 0 ? " in stock " : "Not available"}</span>
              </p>
              <p>
                ID: <span> {id}</span>
              </p>
              <p>
                Brand: <span> {company}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
