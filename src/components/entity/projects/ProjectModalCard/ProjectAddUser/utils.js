export default function canAddUserToProject(project, data, email) {
  return (
    !project.users.some((user) => user.email === email) &&
    data?.users?.some((user) => user.email === email)
  )
}
