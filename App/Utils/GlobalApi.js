import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-northeast-1.hygraph.com/v2/clt85em1414n507utjcmao7sy/master"

const getSlider = async()=> {
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
`
    const result = await request(MASTER_URL, query);
return result;
}

const getCategories=async()=>{
    const query=gql`
    query GetCategory {
        categories {
          id
          name
          icon {
            url
          }
        }
      }
      `
      const result = await request(MASTER_URL, query);
return result;
}

const getBusinessList=async()=>{
  const query=gql `
  query getBusinessList {
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
return result;
}

export default {
    getSlider,
    getCategories,
    getBusinessList
}
