---
title: Design Algorithm 8
description: An introduction to Design Algorithm (DG), its principles, techniques, and applications in computer science.
---
<Callout title="Warning" type="warning">
This article is a work in progress and may contain incomplete information or inaccuracies. Please verify details from reliable sources.
</Callout>

# ch8: Dynamic Programming

## 1) โจทย์
1. เขียนโปรแกรมหาจำนวนฟีโบนักชี โดยใช้เทคนิค Dynamic Programming แบบไม่เรียกซ้ำ (ไม่ใช้ recursive call)
2. เขียนโปรแกรมหา C(n,k) จากสมการ

$$
C(n,k)=C(n-1,k)+C(n-1,k-1), \quad C(n,0)=1, \; C(n,n)=1
$$

ให้ทำ 3 แบบ
- โปรแกรมแบบเวียนเกิด (recursive)
- โปรแกรมแบบเวียนเกิดที่มีการจำคำตอบ (memoization)
- โปรแกรมแบบกำหนดการพลวัต (dynamic programming แบบตาราง)

## 2) วิธีคิดทีละบรรทัด

### 2.1 Fibonacci แบบ DP ไม่ใช้ recursion
1. กำหนดฐาน: F(0)=0, F(1)=1
2. ใช้ตัวแปรสะสมสองตัวแทน F(i-2), F(i-1)
3. วนลูปจาก 2 ถึง n แล้วอัปเดตค่าถัดไป
4. เมื่อจบลูป ค่าสุดท้ายคือ F(n)

เวลา O(n), หน่วยความจำ O(1)

### 2.2 C(n,k) แบบ recursive
1. ถ้า k=0 หรือ k=n คืนค่า 1
2. มิฉะนั้นคืนค่า C(n-1,k)+C(n-1,k-1)

เวลาโดยประมาณเป็นเอ็กซ์โพเนนเชียล (ซ้ำซ้อนมาก)

### 2.3 C(n,k) แบบ recursive + memoization
1. โครงสร้างเหมือน recursive
2. ก่อนคำนวณตรวจว่าค่านี้เคยคำนวณแล้วหรือไม่
3. ถ้าเคยคำนวณแล้ว ให้ดึงจากแคชทันที

เวลา O(nk), หน่วยความจำ O(nk)

### 2.4 C(n,k) แบบ DP ตาราง
1. สร้างตาราง c ขนาด (n+1) x (k+1)
2. ตั้งฐาน c[i][0]=1 และ c[i][i]=1
3. ใช้สูตรเวียนเกิดเติมค่าภายในตาราง
4. คำตอบคือ c[n][k]

เวลา O(nk), หน่วยความจำ O(nk)

## 3) โค้ดที่จัดทำ
ไฟล์: src/ch8_dp_programs.py

ภายในไฟล์ประกอบด้วย
- fibonacci_dp(n)
- comb_recursive(n,k)
- comb_memo(n,k)
- comb_dp(n,k)

## 4) ตัวอย่างผลลัพธ์
- F(10)=55
- F(20)=6765
- C(10,4)=210 (ทั้ง 3 วิธีให้ค่าเท่ากัน)

## 5) สรุป
วิธี Dynamic Programming และ Memoization ช่วยลดการคำนวณซ้ำ ทำให้โจทย์ C(n,k) ที่ recursive ล้วนช้ามาก กลายเป็นแก้ได้มีประสิทธิภาพในระดับ O(nk)
