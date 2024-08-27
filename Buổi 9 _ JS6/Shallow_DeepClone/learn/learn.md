1. LT: Tham chiếu 
   1. Xảy ra khi sao chép 1 đối tượng sang 1 biến mới.  Trong qt này, các đối tượng hoặc mảng lồng nhau vẫn tham chiếu đến vị trí bộ nhớ gốc.
   2. => Nếu thay đổi các thuộc tính của 1 đồi tượng thì tk kia cũng sẽ thay đổi vì cùng tham chiếu đến 1 bộ nhớ
   3. Vd:
    ```js
        let user = {
            name: "alo",
            size: {
                width: 200
            }
        };
        let admin = user; // Cái này nó chỉ là 2 tk này nó cùng tham chiếu đến 1 ô nhớ => Thay đổi 1 cái là cả 2 đều đổi

        admin.name = "Xin chao"
        console.log(admin.name)
        console.log(user.name)
    ```
2. Khăc phục vấn đề trên: 
   1. Mặt khác, bản sao nông/sâu tạo ra một bản sao hoàn toàn độc lập của đối tượng, bao gồm tất cả các đối tượng hoặc mảng lồng nhau. Điều này đảm bảo rằng những thay đổi được thực hiện đối với một đối tượng không ảnh hưởng đến đối tượng kia. Mỗi đối tượng được lưu trữ ở một vị trí bộ nhớ riêng biệt, khiến chúng hoàn toàn độc lập.
   2. VD:   
    ```js
        let user = {
            name: "alo",
            size: {
                width: 200,
                height: 400
            }
        };
    ```
   3. Shallow Copy:
      1. ĐN: Tạo 1 bản sao nông(nghĩa là những đã tham chiếu chính cái Object ở 2 địa chỉ khác nhau) Nhưng chỉ ở mức nông(những cặp key-value là dl nguyên thủy thì thay đổi. Nhưng key-vl là Object nó vẫn tham chiếu cùng 1 chỗ)
      2. C1: Sử dụng spread operator
       ```js
            let clone1 = {...user};
            clone1.name = "JELLO"
            console.log(clone1.name)
            console.log(user.name)
       ```
      3. C2: Sử dụng Object.assign():
       ```js
            let clone2 = Object.assign({}, user)
            clone2.name = "OHIO"
            console.log(clone2.name)
            console.log(user.name)
       ``` 
   4. Deep Clone: Sử dụng JSON, Để tạo 1 bản sao sâu với 1 Object
      1. ĐN: Tạo 1 bản sao sâu, tất cả các cặp key-value đều thuộc đia chỉ khác nhau
      2. Code: SỬ dụng JSON
       ```js
            let clone3 = JSON.parse(JSON.stringify(user))
            clone3.name = "ZHIO"
            console.log(clone3.name)
            console.log(user.name)
       ``` 
   5. Sự khác biệt:
    ```js
        // Sự khác biệt: Deep với Shallow:
        console.log(user.size.width)

        console.log("Sự khác biệt: Deep với Shallow:")
        clone3.size.width = 2
        console.log("clone deep:" , clone3)
        console.log("main: ", user)

        clone1.size.width = 2
        console.log("clone shallow:" ,clone1)
        console.log("main: ", user)
    ```

