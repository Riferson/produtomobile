import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacityProps } from 'react-native';
import { ProductsDTO } from "../../dtos/ProductsDTO";
import noImage from '../../images/no-image.png';


import {Container,ProductImage,ProductDescription,ProductName,ProductValue,ProductResulmDescription} from './styles';

interface Props extends TouchableOpacityProps {
    data:ProductsDTO;
    handleDescriptionProduct:(item:ProductsDTO)=>void;
}

export function ProductCard({data,...rest}:Props){

    const navigation = useNavigation();
    function handleDescriptionProduct(){

        navigation.navigate('Descricao',{paramKey:data.idProduto})
        
    }
    return(
        <Container  onPress={handleDescriptionProduct} {...rest}>
            <ProductImage source={noImage}/>
            <ProductDescription>
                <ProductName>{data.nome}</ProductName>
                <ProductValue>{data.preco}</ProductValue>
                <ProductResulmDescription>{data.descricao}</ProductResulmDescription>
            </ProductDescription>
        </Container>
    );
}