---
title: Design Algorithm 3
description: An introduction to Design Algorithm (DG), its principles, techniques, and applications in computer science.
---
<Callout title="Warning" type="warning">
This article is a work in progress and may contain incomplete information or inaccuracies. Please verify details from reliable sources.
</Callout>

## ข้อ 1
โจทย์: อธิบายความหมายของสัญกรณ์ Big-O, Big-Theta, Big-Omega, little-o และ little-omega

### 1) Big-O

$$
f(n) \in O(g(n))
$$

หมายถึง มีค่าคงที่บวก $c, n_0$ ที่ทำให้

$$
0 \le f(n) \le c g(n), \; \forall n \ge n_0
$$

ตีความ: เพดานการเติบโต (upper bound)

### 2) Big-Theta

$$
f(n) \in \Theta(g(n))
$$

หมายถึง มีค่าคงที่บวก $c_1,c_2,n_0$ ที่ทำให้

$$
0 \le c_1 g(n) \le f(n) \le c_2 g(n), \; \forall n \ge n_0
$$

ตีความ: เติบโตระดับเดียวกันแบบแน่น (tight bound)

### 3) Big-Omega

$$
f(n) \in \Omega(g(n))
$$

หมายถึง มีค่าคงที่บวก $c,n_0$ ที่ทำให้

$$
0 \le c g(n) \le f(n), \; \forall n \ge n_0
$$

ตีความ: พื้นการเติบโต (lower bound)

### 4) little-o

$$
f(n) \in o(g(n))
$$

หมายถึง โตช้ากว่าอย่างเคร่งครัด โดย

$$
\lim_{n\to\infty} \frac{f(n)}{g(n)} = 0
$$

### 5) little-omega

$$
f(n) \in \omega(g(n))
$$

หมายถึง โตเร็วกว่าอย่างเคร่งครัด โดย

$$
\lim_{n\to\infty} \frac{f(n)}{g(n)} = \infty
$$

หมายเหตุ: ฐานของลอการิทึมต่างกันได้แต่ยังอยู่ลำดับเดียวกัน เพราะต่างกันด้วยค่าคงที่

## ข้อ 2
โจทย์: หาลำดับ Big-O ของฟังก์ชันที่กำหนด

### วิธีคิดทีละบรรทัด
1. เก็บเฉพาะพจน์ที่โตเร็วสุดเมื่อ $n$ มาก
2. ตัดค่าคงที่คูณทิ้งได้ใน Big-O
3. เปรียบเทียบอัตราเติบโตมาตรฐาน เช่น

$$
n^2 > n\log n > n > \log n
$$

### คำตอบรายข้อ
1. $f_1(n)=10n+25n^2 \Rightarrow O(n^2)$
2. $f_2(n)=20n\log n+5n \Rightarrow O(n\log n)$
3. $f_3(n)=n\log n+0.05n^2 \Rightarrow O(n^2)$
4. $f_4(n)=\sqrt{n}+\log n \Rightarrow O(\sqrt{n})$
5. $f_5(n)=n\log n+\log n \Rightarrow O(n\log n)$
6. $f_6(n)=3n^2+3n\log n \Rightarrow O(n^2)$

## ข้อ 3
โจทย์: อธิบายความหมายของข้อความเชิงสัญกรณ์

### 3.1

$$
f(n)=10\log n, \quad f(n) \in \Theta(\log n)
$$

ความหมาย: $f(n)$ โตในระดับเดียวกับ $\log n$ ทั้งด้านบนและด้านล่าง
มีค่าคงที่ $c_1,c_2,n_0$ ทำให้

$$
c_1\log n \le 10\log n \le c_2\log n, \; n\ge n_0
$$

เช่นเลือก $c_1=c_2=10$ ได้ทันที

### 3.2

$$
f(n)=n^2+7n, \quad f(n) \in O(n^2)
$$

ความหมาย: $n^2+7n$ มีเพดานการโตไม่เกินหลายเท่าของ $n^2$ เมื่อ $n$ ใหญ่พอ

### 3.3

$$
f(n)=20n\log n +2n, \quad f(n) \in \Omega(n\log n)
$$

ความหมาย: ฟังก์ชันนี้โตอย่างน้อยระดับ $n\log n$ (มี lower bound แบบพหุคูณคงที่)

## ข้อ 4
โจทย์: จงแสดงว่า

$$
f(n)=3n^2+100n+500 = O(n^2)
$$

### วิธีพิสูจน์ทีละบรรทัด
ต้องการหาค่าคงที่บวก $c,n_0$ ให้

$$
f(n) \le c n^2, \quad \forall n\ge n_0
$$

สำหรับ $n\ge 1$ จะได้

$$
100n \le 100n^2, \qquad 500 \le 500n^2
$$

ดังนั้น

$$
f(n)=3n^2+100n+500
\le 3n^2+100n^2+500n^2
=603n^2
$$

เลือก $c=603$ และ $n_0=1$ จะเป็นจริงตามนิยาม Big-O

สรุปว่า

$$
3n^2+100n+500 \in O(n^2)
$$

## สรุปรวม
แบบฝึกหัดครั้งนี้เน้นการตีความสัญกรณ์เชิงเส้นกำกับและการพิสูจน์ตามนิยาม ซึ่งหัวใจสำคัญคือการเลือกพจน์เด่นและหาค่าคงที่เพื่อครอบบน/ครอบล่างให้ถูกต้อง
