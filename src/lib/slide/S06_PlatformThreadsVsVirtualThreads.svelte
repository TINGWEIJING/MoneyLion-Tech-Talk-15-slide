<script lang="ts">
  import { Presentation, Slide, Code, Transition, Action } from '@animotion/core';
  import { tween, all, animate, wait } from '@animotion/motion';

  let cause01Opacity = $state(1);
  let cause02Opacity = $state(0.65);
  let cause03Opacity = $state(0.65);
  let fix01Opacity = $state(1);
  let fix02Opacity = $state(0);
  let fix03Opacity = $state(0);
</script>

<Slide
  in={() => {
    cause01Opacity = 1;
    cause02Opacity = 0.65;
    cause03Opacity = 0.65;
    fix01Opacity = 1;
    fix02Opacity = 0;
    fix03Opacity = 0;
  }}
>
  <p class="slide-header-div s-6xl font-bold">Platform Threads vs Virtual Threads</p>
  <table class="s-6xl">
    <thead>
      <tr>
        <th>
          <strong>Aspect</strong>
        </th>
        <th>
          <strong>Platform Threads</strong>
        </th>
        <th>
          <strong>Virtual Threads</strong>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <Transition visible>
            <p style:opacity={cause01Opacity}>
              <strong>Use Case</strong>
            </p>
          </Transition>
        </td>
        <td>
          <Transition visible>
            <p style:opacity={fix01Opacity}>Suitable for both CPU & I/O operations</p>
          </Transition>
        </td>
        <td>
          <Transition visible>
            <p style:opacity={fix01Opacity}>Designed for I/O operation only</p>
          </Transition>
        </td>
      </tr>
      <tr>
        <td>
          <Transition visible>
            <p style:opacity={cause02Opacity}>
              <strong>Resource Usage</strong>
            </p>
          </Transition>
        </td>
        <td>
          <Transition visible>
            <p style:opacity={fix02Opacity}>High memory usage</p>
          </Transition>
        </td>
        <td>
          <Transition visible>
            <p style:opacity={fix02Opacity}>Extremely lightweight in terms of memory usage</p>
          </Transition>
        </td>
      </tr>
      <tr>
        <td>
          <Transition visible>
            <p style:opacity={cause03Opacity}>
              <strong>Creation and Teardown</strong>
            </p>
          </Transition>
        </td>
        <td>
          <Transition visible><p style:opacity={fix03Opacity}>Slower</p></Transition>
        </td>
        <td>
          <Transition visible><p style:opacity={fix03Opacity}>Faster</p></Transition>
        </td>
      </tr>
    </tbody>
  </table>
  <Transition
    do={() => {
      cause01Opacity = 0.65;
      fix01Opacity = 0.65;

      cause02Opacity = 1;
      fix02Opacity = 1;

      cause03Opacity = 0.65;
      fix03Opacity = 0;
    }}
  />
  <Transition
    do={() => {
      cause01Opacity = 0.65;
      fix01Opacity = 0.65;

      cause02Opacity = 0.65;
      fix02Opacity = 0.65;

      cause03Opacity = 1;
      fix03Opacity = 1;
    }}
  />
</Slide>
