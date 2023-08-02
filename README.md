Ecommerce
  Category
    id
    createdAt
    updatedAt
    deletedAt
    name
    description
    images[]
    active
    position
    parentId []

  Promotion
    id
    createdAt
    updatedAt
    deletedAt
    name
    type %|$
    discont

  Attibute 
    id
    createdAt
    updatedAt
    deletedAt
    type COLOR|SIZE|FLAVOR|SHIPPING|TEXT|ESPECIFICATION|DESCRIPTION|BRAND
    name
    description
    palette[string, string]
    shipping[string, string, string, string]
    position

  Produtct
    id
    createdAt
    updatedAt
    deletedAt
    categoryId[]
    name
    description
    descriptionText
    metaDescription
    metaTag
    emphasis
    active
  
  Sku 
    id
    createdAt
    updatedAt
    deletedAt
    produtctId
    promotionId[]
    attributeId[]
    sku
    code
    reference
    price
    stock
    useStock
    images[string]
    position


  Status
    id
    createdAt
    updatedAt
    deletedAt
    type CREATED|IN_ANALYSIS|PAID_OUT|UNPAID_PAYMENT|PAYMENT_NOT_MADE|ON_CARRIAGE|STOCK_SEPARATION|NOTE_ISSUED|CANCELED
    name
    description
    icon
    position

  Order
  