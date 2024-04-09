import React, { useEffect } from "react";
import Input from "../../components/Input/Input";
import { useDispatch } from "react-redux";

const BookingTable = ({
  arr,
  user,
  pickedSeat,
  totalPrice,
  countedSeat,
  bookingData,
  handleSubmit,
  handleChange,
  getPickedSeat,
  getTotalPrice,
  setBookingData,
}) => {
  const dispatch = useDispatch();
  // useEffect updating
  useEffect(() => {
    const arrListSeat = document.querySelectorAll(".seatCheckBox");
    console.log(arrListSeat);
    console.log(arrListSeat.length);
    pickSeat(arrListSeat, countedSeat);
  }, [arr, countedSeat]);
  useEffect(() => {});

  //  function picking seat on choices
  const pickSeat = (arr, countedSeat) => {
    arr.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const checkedCheckboxes = document.querySelectorAll(
          ".seatCheckBox:checked"
        );

        // Kiểm tra nếu số lượng checkboxes được check vượt quá giới hạn
        if (checkedCheckboxes.length >= countedSeat) {
          // Vô hiệu hóa tất cả các checkboxes chưa được check
          arr.forEach((box) => {
            if (!box.checked) {
              box.disabled = true;
            }
          });
        } else {
          // Kích hoạt lại tất cả các checkboxes theo sk onChange
          arr.forEach((box) => {
            // box nào được đặt rồi thì không chỉnh về false
            if (box.defaultValue != "true") {
              box.disabled = false;
            }
          });
        }
      });
    });
  };

  //   Function submit choices from user
  const pickData = () => {
    const data = document.querySelectorAll(".seatCheckBox:checked");
    console.log("hello");
    console.log(data);
    let pickedSeat = [];
    let totalPrice = 0;
    data.forEach((choice) => {
      pickedSeat.push(choice.id);
      totalPrice += parseFloat(choice.name);
    });

    console.log(pickedSeat);
    dispatch(getPickedSeat(pickedSeat));
    console.log(totalPrice);
    dispatch(getTotalPrice(totalPrice));

    // let obj = {};
    // obj["name"] = user;
    // obj["soGheDaDat"] = countedSeat;
    // obj["luaChon"] = pickedSeat;
    // obj["tongGia"] = totalPrice;
    // console.log(obj);
    // dispatch(setBookingData(obj));
  };

  return (
    <div id="bookingTableContent">
      <form id="tableBookingSeat">
        <table>
          <tbody>
            {arr.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.hang}</td>
                  {item.danhSachGhe.map((seat, index2) => {
                    if (item.hang != "") {
                      return (
                        <td key={index2}>
                          <Input
                            name={seat.gia}
                            id={seat.soGhe}
                            handleChange={handleChange}
                            cssInput="seatCheckBox"
                            value={seat.daDat}
                            type="checkbox"
                            disabled={true}
                          />
                        </td>
                      );
                    } else {
                      return <td key={index2}>{seat.soGhe}</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
      {/* Button Đặt vé */}
      <div>
        <button
          type="button"
          onClick={() => {
            pickData();
          }}
          className="px-5 py-2 rounded bg-green-500"
        >
          Đặt vé
        </button>
      </div>
    </div>
  );
};

export default BookingTable;
