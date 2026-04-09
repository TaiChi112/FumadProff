---
title: Design Algorithm 5.1
description: An introduction to Design Algorithm (DG), its principles, techniques, and applications in computer science.
---
<Callout title="Warning" type="warning">
This article is a work in progress and may contain incomplete information or inaccuracies. Please verify details from reliable sources.
</Callout>

# ch5.1: Dijkstra Algorithm

## 1) โจทย์
กำหนดกราฟถ่วงน้ำหนักแบบมีทิศทาง และให้จุดเริ่มต้นเป็นโหนด S
ต้องหาเส้นทางสั้นที่สุดจาก S ไปยังโหนดอื่นทั้งหมดด้วยวิธีของ Dijkstra

## 2) ข้อมูลเส้นเชื่อมจากรูป
- S -> A (2)
- S -> D (20)
- A -> E (3)
- A -> G (10)
- E -> B (1)
- E -> G (6)
- E -> H (4)
- B -> C (7)
- B -> F (12)
- C -> F (4)
- H -> G (1)
- G -> D (2)

## 3) วิธีทำทีละขั้น
1. กำหนดค่าเริ่มต้น dist(S)=0 และโหนดอื่นเป็น infinity
2. เลือกโหนดที่ยังไม่ยืนยันและมี dist น้อยสุด
3. ผ่อนคลายเส้นเชื่อมออกจากโหนดนั้น
4. ทำซ้ำจนทุกโหนดถูกยืนยัน

ลำดับการยืนยันโหนดและการปรับระยะทาง (ค่าที่สำคัญ)
1. ยืนยัน S: ได้ A=2, D=20
2. ยืนยัน A: ได้ E=5, G=12
3. ยืนยัน E: ได้ B=6, H=9, G=min(12,11)=11
4. ยืนยัน B: ได้ C=13, F=18
5. ยืนยัน H: ได้ G=min(11,10)=10
6. ยืนยัน G: ได้ D=min(20,12)=12
7. ยืนยัน D: ไม่เปลี่ยนค่า
8. ยืนยัน C: ได้ F=min(18,17)=17
9. ยืนยัน F: เสร็จสิ้น

## 4) คำตอบสุดท้าย

| โหนดปลายทาง | ระยะทางสั้นสุดจาก S | เส้นทางสั้นสุด                 |
| ----------- | ---------------: | -------------------------- |
| A           |                2 | S -> A                     |
| E           |                5 | S -> A -> E                |
| B           |                6 | S -> A -> E -> B           |
| H           |                9 | S -> A -> E -> H           |
| G           |               10 | S -> A -> E -> H -> G      |
| D           |               12 | S -> A -> E -> H -> G -> D |
| C           |               13 | S -> A -> E -> B -> C      |
| F           |               17 | S -> A -> E -> B -> C -> F |

## 5) สรุป
เส้นทางสั้นที่สุดจาก S ไปทุกโหนดหาได้ครบด้วย Dijkstra และให้ผลสอดคล้องกับเงื่อนไขน้ำหนักบวกของกราฟ
