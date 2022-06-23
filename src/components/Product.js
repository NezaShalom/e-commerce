import React from 'react'
import Image from 'next/image';
import { useState } from "react";
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { StarIcon } from '@heroicons/react/solid'
import { addToBasket } from '../slices/basketSlice';
import { motion } from "framer-motion";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id, title, price, description, category, image}) {
  const getRandomPrime = () => Math.random() < 0.5;
  const getRandomRating = () =>
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) * MIN_RATING;
  const [rating] = useState(getRandomRating());
  

  //Add to cart on click
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      category,
      price,
      image,
      rating,
    };

    dispatch(addToBasket(product));
  };

  return (

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 rounded-md'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
          {category}
        </p>
        <Image src={image} height={200} width={200} objectFit="contain" />
        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
          {Array(rating).fill().map((_,i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
        </div>

        <p className='text-xs my-2 line-clamp-2'>{description}</p>

        <div className='mb-5'>
          <Currency quantity={price} currency='RWF' />
        </div>

        <button className='mt-auto button' onClick={addItemToBasket}>
        Add to basket
      </button>
      </div>
  );
}

export default Product