---
title: Design Algorithm 5.2
description: An introduction to Design Algorithm (DG), its principles, techniques, and applications in computer science.
---
<Callout title="Warning" type="warning">
This article is a work in progress and may contain incomplete information or inaccuracies. Please verify details from reliable sources.
</Callout>

# ch5.2: Minimum Spanning Tree (Prim และ Kruskal)

## 1) โจทย์
จากกราฟถ่วงน้ำหนักแบบไม่มีทิศทาง ให้หาต้นไม้แผ่ค่าต่ำสุด (MST)
โดยใช้ทั้ง Prim และ Kruskal

## 2) เส้นเชื่อมและน้ำหนักจากรูป
- v1-v2 (100)
- v1-v4 (110)
- v2-v3 (50)
- v2-v5 (50)
- v2-v6 (40)
- v3-v4 (60)
- v3-v6 (60)
- v4-v5 (45)
- v5-v6 (55)

## 3) วิธี Kruskal (เรียงน้ำหนักจากน้อยไปมาก)
ลำดับน้ำหนัก: 40, 45, 50, 50, 55, 60, 60, 100, 110

คัดเลือกทีละเส้นโดยไม่ให้เกิดวัฏจักร
1. เลือก v2-v6 (40)
2. เลือก v4-v5 (45)
3. เลือก v2-v3 (50)
4. เลือก v2-v5 (50)
5. ข้าม v5-v6 (55) เพราะจะเกิดวัฏจักร
6. ข้ามเส้นน้ำหนัก 60 ทั้งสองเส้น (เกิดวัฏจักร)
7. เลือก v1-v2 (100) เพื่อเชื่อม v1 เข้าต้นไม้

ครบ 5 เส้นสำหรับ 6 โหนด จบ

MST ที่ได้จาก Kruskal
- v2-v6 (40)
- v4-v5 (45)
- v2-v3 (50)
- v2-v5 (50)
- v1-v2 (100)

ผลรวมค่าน้ำหนัก

$$
40+45+50+50+100=285
$$

## 4) วิธี Prim (เริ่มที่ v1)
1. จาก v1 เลือกเส้นเบาสุด: v1-v2 (100)
2. จากกลุ่ม {v1,v2} เลือก v2-v6 (40)
3. จากกลุ่ม {v1,v2,v6} เลือก v2-v3 (50)
4. จากกลุ่ม {v1,v2,v3,v6} เลือก v2-v5 (50)
5. จากกลุ่ม {v1,v2,v3,v5,v6} เลือก v5-v4 (45)

ได้ MST เดียวกัน และน้ำหนักรวมเท่ากับ 285

## 5) สรุป
ทั้ง Prim และ Kruskal ให้ผล MST เหมือนกันในโจทย์นี้ โดยมีน้ำหนักรวมน้อยที่สุดเท่ากับ 285
