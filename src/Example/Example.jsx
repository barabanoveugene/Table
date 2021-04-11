import React from 'react'
import './Example.css'

export const TableExample = () => {
    const data = [
        ['one'],
        ['one', 'two'],
        ['one', 'two'],
        ['one'],
        ['one', 'two', 'three']
    ]

    const itemTd = []
    const itemTr = []
    var maxValueTd = 4
    var maxValueTr = 4


   const maxValue = (arrData) => {
        let max = 0
        for (let count = 0; count < arrData.length; count++) {
            if ( max < arrData[count]) {
                max = arrData[count]
            }
        }
        return max
    }

    
    const getInfoTable = (arr) => {
        arr.forEach((item, index) => {
            itemTd.push(index + 1)
            itemTr.push(item.length)
        });
    }

   const createTable = () => {
        let a = maxValue(itemTd, maxValueTd)
   }

    getInfoTable(data)
   
    maxValueTd = maxValue(itemTd)
    maxValueTr = maxValue(itemTr)

    console.log(maxValueTd, maxValueTr)



    return (
        <>
          <table>
            <tbody>
                <tr>
                    <th>One</th>
                    <th>Two</th>
                    <th>Three</th>
                </tr>
                <tr className="bg-grey">
                    <td>One</td>
                    <td>Two</td>
                    <td>Three</td>
                </tr>
                <tr>
                    <td colSpan="2">One</td>
                    <td rowSpan="3">Two</td>
                </tr>
                <tr className="bg-grey">
                    <td>One</td>
                    <td>Two</td>
                </tr>
            </tbody>
          </table>
          <h1>Email</h1>
          <table className="email">
              <tr>
                  <td colSpan="2">Google</td>
                  <td>+737374747474747474</td>
              </tr>
              <tr>
                  <td colspan="2" rowSpan="2">
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                      </ul>
                  </td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos natus minus, cum, laborum nihil deleniti ea deserunt, cumque quaerat delectus. Magni dolor, ea maiores sunt dolorum nesciunt earum ipsa.
                  Molestias sint velit expedita vitae laborum. Velit odio numquam ea non nisi architecto ad dolor modi est minima maxime nesciunt dolorem, deserunt ipsum eos similique fugiat quod ipsa accusantium voluptates!</td>
              </tr>
              <tr>
                  <td>
                      Address
                  </td>
              </tr>
          </table>
<table>
    <tbody>
        <tr>
            <td rowSpan={3}>1.1</td>
            <td rowSpan={2}>1.2</td>
            <td rowSpan={2}>1.3</td>
            <td rowSpan={3}>1.4</td>
            <td>1.5</td>
        </tr>
         <tr>
            <td>2.5</td>
        </tr>
        <tr>
            <td>3.3</td>
            <td>3.4</td>
            <td>3.5</td>
        </tr>
    </tbody>
</table>
        </>
    )
}