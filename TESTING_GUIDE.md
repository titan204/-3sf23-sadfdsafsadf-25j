# Quick Testing Guide - User Profile & Complaints System

## البيانات الجاهزة للاختبار

### حساب مستخدم موجود:
```
Email: john@example.com
Password: Password123!
Name: John Doe
Address: 123 Main St, Anytown, USA
```

### كتب متاحة للشراء:
```
1. The Silent Patient - $12.99
2. Where the Crawdads Sing - $14.99
3. Educated - $13.50
4. Becoming - $15.25
```

---

## اختبار شامل (خطوة بخطوة)

### ✅ الخطوة 1: تسجيل الدخول

```
1. اذهب إلى http://localhost/login.html
2. أدخل:
   - Email: john@example.com
   - Password: Password123!
3. انقر "Login"
4. تحقق من إعادة التوجيه إلى الصفحة الرئيسية
```

### ✅ الخطوة 2: شراء كتاب أول

```
1. اذهب إلى Catalog من الشريط العلوي
2. اختر "The Silent Patient"
3. انقر "Buy Now"
4. تحقق من:
   - ملء الحقول التلقائي ببيانات المستخدم
   - الصورة والسعر صحيح
5. ملأ بيانات الدفع (أي بيانات):
   - First Name: John
   - Last Name: Doe
   - Address: 123 Main St
   - City: Cairo
   - State: Cairo
   - ZIP: 12345
   - Phone: 01234567890
   - Card Number: 4242424242424242
   - Expiry: 12/25
   - CVV: 123
   - قبول الشروط
6. انقر "Complete Purchase"
7. تحقق من رسالة النجاح والتوجيه للصفحة الرئيسية
```

### ✅ الخطوة 3: شراء كتاب ثاني (اختياري)

```
1. كرر الخطوة 2 مع "Where the Crawdads Sing"
```

### ✅ الخطوة 4: الذهاب إلى ملف المستخدم

```
1. من الشريط العلوي، انقر "Profile"
2. تحقق من وجود ثلاثة أقسام في الشريط الجانبي:
   - Profile
   - My Orders
   - My Complaints
```

### ✅ الخطوة 5: فحص قسم البروفايل

```
في قسم Profile (يجب أن تكون هنا بالفعل):

البيانات الشخصية:
- Full Name: John Doe ✓
- Email: john@example.com ✓
- Address: 123 Main St, Anytown, USA ✓

بطاقة الدفع:
- Card Number: ****4242 (آخر 4 أرقام فقط) ✓
- Expiry: 12/25 ✓
- CVV: *** (مخفي) ✓

إحصائيات:
- Total Orders: 1 أو 2 (حسب عدد الشراءات) ✓
- Total Spent: $12.99 أو $27.98 ✓
- Books Purchased: 1 أو 2 ✓

زر "Edit Profile" يعمل بشكل صحيح ✓
```

### ✅ الخطوة 6: تعديل البروفايل

```
1. انقر "Edit Profile"
2. تحقق من ملء النموذج بالبيانات الحالية
3. عدّل البيانات:
   - غيّر الاسم إلى "John Smith"
   - غيّر العنوان
4. انقر "Save Changes"
5. تحقق من:
   - رسالة النجاح
   - تحديث البيانات المعروضة
   - إغلاق نموذج التعديل
```

### ✅ الخطوة 7: عرض الطلبات

```
1. انقر على "My Orders" في الشريط الجانبي
2. تحقق من وجود الطلبات:
   - لكل طلب: رقم الطلب + التاريخ
   - الحالة: "Pending" (بلون أصفر)
   - تفاصيل الكتب والأسعار
   - إجمالي المبلغ
   - زر "Cancel Order" (يظهر فقط للطلبات pending)
```

### ✅ الخطوة 8: إلغاء طلب

```
1. في قسم "My Orders"
2. انقر على زر "Cancel Order"
3. نافذة تأكيد تظهر:
   - "Are you sure you want to cancel this order?"
4. انقر "Yes, Cancel Order"
5. تحقق من:
   - رسالة النجاح
   - تغيير الحالة إلى "Cancelled" (بلون أحمر)
```

### ✅ الخطوة 9: تقديم شكوى

```
1. انقر على "My Complaints" في الشريط الجانبي
2. تحقق من رسالة "You haven't filed any complaints yet"
3. انقر على زر "New Complaint"
4. نموذج الشكوى يظهر:
   - قائمة الكتب (يجب أن تحتوي على الكتب المشتراة فقط)
   - حقل العنوان
   - حقل الوصف
5. ملأ النموذج:
   - Select Book: "The Silent Patient"
   - Complaint Title: "Book is damaged"
   - Description: "The book arrived with torn pages"
6. انقر "Submit Complaint"
7. تحقق من:
   - رسالة النجاح
   - إغلاق النموذج
   - ظهور الشكوى في القائمة
```

### ✅ الخطوة 10: عرض الشكاوى

```
1. في قسم "My Complaints"
2. تحقق من وجود الشكوى:
   - العنوان: "Book is damaged"
   - الكتاب: "The Silent Patient"
   - التاريخ: اليوم
   - الحالة: "Pending" (بلون أصفر)
   - الوصف: "The book arrived with torn pages"
   - رسالة: "Awaiting admin response..."
```

### ✅ الخطوة 11: دخول الإدارة للرد

```
1. اذهب إلى admin-login.html
2. تسجيل دخول الإدارة (هذا افتراضي)
3. في الشريط الجانبي، انقر "Complaints"
4. تحقق من ظهور شكوى "Book is damaged"
```

### ✅ الخطوة 12: الرد على الشكوى من الإدارة

```
1. في قسم Complaints من admin
2. انقر على زر "Send Reply"
3. نموذج الرد يظهر
4. أكتب ردك:
   "We apologize for the damage. We will send you a replacement immediately."
5. انقر "Send Reply"
6. تحقق من:
   - رسالة النجاح
   - إغلاق النموذج
   - تحديث حالة الشكوى إلى "Reviewed"
   - ظهور الرد في الشكوى
```

### ✅ الخطوة 13: عرض الرد عند المستخدم

```
1. كمستخدم عادي، اذهب إلى user-profile.html
2. انقر على "My Complaints"
3. تحقق من:
   - الحالة: "Reviewed" (بلون أزرق)
   - ظهور رد الإدارة:
     "We apologize for the damage. We will send you a replacement immediately."
```

### ✅ الخطوة 14: إدارة الطلبات من الإدارة

```
1. في admin، انقر "Manage Orders"
2. تحقق من عرض جميع الطلبات
3. اختر طلب وغيّر حالته:
   - من "Pending" إلى "Processing"
   - ثم "Shipped"
   - ثم "Delivered"
4. تحقق من تحديث الألوان
```

### ✅ الخطوة 15: عرض تحديثات الطلب عند المستخدم

```
1. كمستخدم، اذهب إلى user-profile.html → My Orders
2. تحقق من تحديث حالة الطلب:
   - الحالة الجديدة تظهر بشكل صحيح
   - اللون يتغير حسب الحالة
```

---

## الحالات المرجعية للألوان

### Statuses and Colors:
```
- Pending:    Yellow (bg-yellow-100 text-yellow-800)
- Processing: Blue (bg-blue-100 text-blue-800)
- Shipped:    Purple (bg-purple-100 text-purple-800)
- Delivered:  Green (bg-green-100 text-green-800)
- Cancelled:  Red (bg-red-100 text-red-800)
- Reviewed:   Blue (bg-blue-100 text-blue-800)
- Resolved:   Green (bg-green-100 text-green-800)
- Rejected:   Red (bg-red-100 text-red-800)
```

---

## المشاكل الشائعة والحلول

### ❌ المشكلة: لا يمكن الوصول إلى صفحة البروفايل
**الحل**: تأكد من تسجيل الدخول أولاً

### ❌ المشكلة: قائمة الكتب في نموذج الشكوى فارغة
**الحل**: تحقق من أنك اشتريت كتاب واحد على الأقل

### ❌ المشكلة: البيانات لم تُحفظ
**الحل**: 
- تأكد من فتح DevTools (F12) وعدم مسح localStorage
- تحقق من عدم تعطيل cookies

### ❌ المشكلة: الطلب لم يظهر في قسم الطلبات
**الحل**: أعد تحميل الصفحة (Ctrl+R أو F5)

---

## بيانات اختبار إضافية (اختياري)

يمكنك إضافة طلبات اختبار يدويًا عبر console:

```javascript
// فتح console (F12)

// إضافة طلب اختباري
const testOrder = {
    id: Date.now(),
    orderId: 'ORD-TEST-001',
    userId: 1,
    customerName: 'Test User',
    total: 29.98,
    date: new Date().toISOString(),
    status: 'shipped',
    items: [
        {bookId: 1, title: 'The Silent Patient', quantity: 1, price: 12.99},
        {bookId: 2, title: 'Where the Crawdads Sing', quantity: 1, price: 14.99}
    ]
};

const orders = JSON.parse(localStorage.getItem('orders')) || [];
orders.push(testOrder);
localStorage.setItem('orders', JSON.stringify(orders));

location.reload();
```

---

## ملخص النقاط المهمة

✅ كل البيانات محفوظة في localStorage
✅ لا يوجد backend - اختبار محلي فقط
✅ دعم كامل للتعديلات والحذف والإضافة
✅ تحديث ديناميكي للبيانات
✅ واجهة responsive على الموبايل والديسكتوب
✅ جميع النصوص باللغة الإنجليزية
