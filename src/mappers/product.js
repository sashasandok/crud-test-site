export default (prod) => {
  return {
    id: prod.id,
    title: prod.title,
    description: prod.description,
    avatar: prod.avatar,
    coast: prod.coast,
    createdAt: prod.created_at,
    updatedAt: prod.updated_at,
  }
}
