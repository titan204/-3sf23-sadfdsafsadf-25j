# اختبار تدفق البيانات من الشراء إلى لوحة التحكم

## الخطوات المطلوبة للاختبار:

### 1. **قم بتسجيل الدخول كمستخدم عادي:**
   - اذهب إلى صفحة `login.html`
   - استخدم البيانات التالية:
     - البريد الإلكتروني: `john@example.com`
     - كلمة المرور: `Password123!`

### 2. **قم بشراء كتاب:**
   - اذهب إلى `catalog.html` (أو انقر على "Browse Catalog" من الصفحة الرئيسية)
   - اختر أي كتاب وانقر على تفاصيل الكتاب
   - انقر على "Buy Now"
   - أكمل نموذج الشراء وانقر على "Complete Purchase"
   - سيتم توجيهك إلى الصفحة الرئيسية مع ظهور رسالة نجاح

### 3. **تحقق من لوحة التحكم:**
   - اذهب إلى `admin.html` أو `admin-login.html`
   - سجل دخول بصفتك admin
   - انتقل إلى قسم "Dashboard"
   - يجب أن ترى:
     - **Total Orders**: تم تحديثه ليعكس الطلب الجديد
     - **Total Sales**: تم تحديثه بسعر الكتاب المشترى

### 4. **تحقق من تقارير المبيعات:**
   - انقر على "Sales Reports" في الشريط الجانبي
   - يجب أن ترى:
     - **Top Selling Books**: الكتاب الذي اشتريته يجب أن يظهر هنا
     - **Top Categories**: الفئة التي ينتمي إليها الكتاب يجب أن تظهر هنا
     - **Recent Orders**: الطلب الجديد يجب أن يظهر هنا

### 5. **تحقق من الصفحة الرئيسية (Trending Books):**
   - اذهب إلى `index.html` (الصفحة الرئيسية)
   - انظر إلى قسم "Trending Now"
   - الكتاب الذي اشتريته يجب أن يظهر في الأعلى الآن (لأنه الكتاب الأكثر مبيعاً)

---

## البيانات المخزنة في localStorage:

### 1. **books**
   - معلومات جميع الكتب المتاحة
   - يتم تحديث حالة التوفر عند الشراء

### 2. **users**
   - بيانات جميع المستخدمين
   - بيانات تسجيل الدخول

### 3. **orders** (الجديد)
   - كل طلب يحتوي على:
     - `id`: معرف فريد للطلب
     - `orderId`: رقم الطلب المعروض
     - `customerName`: اسم العميل
     - `total`: السعر الإجمالي
     - `date`: تاريخ الطلب
     - `items`: مصفوفة تحتوي على تفاصيل الكتب المشتراة

---

## تدفق البيانات:

```
المستخدم يشتري كتاب
         ↓
confirm-buy.html يحفظ الطلب في localStorage['orders']
         ↓
يتم تحديث حالة الكتاب (available: false)
         ↓
admin.html يقرأ من localStorage['orders']
         ↓
يتم عرض البيانات في:
  - Dashboard (KPI Cards)
  - Sales Reports (Top Books, Top Categories, Recent Orders)
  - Index.html (Trending Books - تصاعد ترتيب الكتب المشتراة)
```

---

## ملاحظات مهمة:

1. **البيانات تُحفظ محلياً**: جميع البيانات تُخزن في localStorage على المتصفح فقط
2. **لا يوجد backend**: هذا نظام كامل من الواجهة الأمامية (Frontend)
3. **البيانات تُشارك بين جميع الصفحات**: استخدام نفس localStorage يعني أن جميع الصفحات ترى نفس البيانات
4. **عند مسح البيانات**: إذا قمت بمسح localStorage، ستُفقد جميع البيانات

---

## اختبار متقدم:

### إضافة طلبات اختبار يدويًا:
1. افتح وحدة تحكم المتصفح (F12)
2. اذهب إلى "Console"
3. شغل الأمر التالي:

```javascript
// إضافة طلب اختباري
const testOrder = {
    id: Date.now(),
    orderId: 'ORD-TEST-001',
    customerName: 'Test Customer',
    total: 29.98,
    date: new Date().toISOString(),
    items: [
        {bookId: 1, title: 'The Silent Patient', quantity: 1, price: 12.99},
        {bookId: 2, title: 'Where the Crawdads Sing', quantity: 1, price: 14.99}
    ]
};

const orders = JSON.parse(localStorage.getItem('orders')) || [];
orders.push(testOrder);
localStorage.setItem('orders', JSON.stringify(orders));

// تحديث الصفحة
location.reload();
```

4. الآن انتقل إلى admin.html وستشاهد التقارير تم تحديثها تلقائياً!
