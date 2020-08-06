<list 
  h-list="container" 
  list="{{list}}" 
  noData="{{noData}}" 
  searchData="{{searchData}}" 
  generic:h-list-content="card" 
  pageData="{{pageData}}" 
  loadData="{{loadData}}"
  slideItems="{{slideItems}}"
  bind:slideTap="slideTap"
  >
  <view slot="toTop">
    <image src="/images/static/tx4.jpg" style="width:100%;"></image>
  </view>
</list>