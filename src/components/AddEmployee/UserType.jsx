export default function UserType() {
  return (
    <>
      <label className="my-2 mx-1 text-label font-semibold">user type</label>
      <select
        name="user_type"
        className="bg-transparent focus:outline-none rounded-input h-input px-5 text-input font-greenAcc  border-[1px] border-yellowAcc"
      
      >
        <option value="admin">Admin</option>
        <option value="superAdmin">SuperAdmin</option>
        <option value="user">User</option>
      </select>
    </>
  );
}
